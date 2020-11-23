package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.models.Offer;
import org.nokwoj.crashhelper.models.OfferDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.repos.OfferRepository;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.interfaces.IDamageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;

@Service
public class DamageService implements IDamageService {

    @Autowired
    DamageRepository damageRepository;

    @Autowired
    FileService fileService;

    @Autowired
    OfferRepository offerRepository;

    @Override
    public String registerNewDamage(DamageRegistrationDto damage, MultipartFile[] photos) {

        Damage newDamage = new Damage(damage.getClientId(),
                damage.getVehicleMake(),
                damage.getVehicleModel(),
                damage.getProductionYear(),
                fileService.savePhotos(photos),
                damage.getDescription());
        Damage result = damageRepository.save(newDamage);

        return result.getId();

    }

    @Override
    public void priceDamage(OfferDto offerDto) {

        Offer offer = offerRepository.save(new Offer(offerDto.getDamageId(),
                offerDto.getWorkshopId(),
                offerDto.getValue(),
                offerDto.getDescription()));

        Damage damage = damageRepository.findDamageById(offerDto.getDamageId());

        damage.setStatus("priced");

        damageRepository.save(damage);
    }

    @Override
    public ArrayList<Damage> getDamagesWaitingForPricing(String workshopId) {
        ArrayList<String> statusList = new ArrayList<String>();

        statusList.add("new");
        statusList.add("priced");

        ArrayList<Damage> damages = damageRepository.findAllByStatusIn(statusList);

        ArrayList<Offer> offers = offerRepository.findAllByWorkshopId(workshopId);

        ArrayList<Offer> pricedOffers = new ArrayList<Offer>(); //offers priced by requesting workshop

        for (Offer o: offers    //get offers of requesting workshop
             ) {

            if(o.getWorkshopId().equals(workshopId)){
                pricedOffers.add(o);
            }

        }

        ArrayList<Damage> selectedDamages = new ArrayList<Damage>();

        for (Damage d: damages  //remove priced damages
             ) {
            for (Offer o: pricedOffers) {
                if(!(d.getId().equals(o.getDamageId()))){
                    selectedDamages.add(d);
                }
            }
        }

        return selectedDamages;
    }

}
