package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.models.Offer;
import org.nokwoj.crashhelper.models.OfferDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.repos.OfferRepository;
import org.nokwoj.crashhelper.services.interfaces.IDamageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Optional;

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

        ArrayList<Damage> newDamages = damageRepository.findAllByStatus("new");

        ArrayList<Damage> pricedDamages = damageRepository.findAllByStatus("priced");

        ArrayList<Offer> offers = offerRepository.findAllByWorkshopId(workshopId);  //workshop's offers

        if(offers.size() > 0){  //if there are damages priced by requesting workshop
            for (Offer o: offers
            ) {
                pricedDamages.removeIf(x -> x.getId().equals(o.getDamageId())); //remove offer priced by workshop
            }
        }

        newDamages.addAll(pricedDamages);   //join results

        return newDamages;
    }

    @Override
    public ArrayList<Damage> getPricedDamagesClient(String clientId) {
        return damageRepository.findAllByStatusAndClientId("priced", clientId);
    }

    @Override
    public ArrayList<Damage> getPricedDamagesWorkshop(String workshopId) {

        ArrayList<Offer> offers = offerRepository.findAllByWorkshopId(workshopId);

        ArrayList<Damage> damages = new ArrayList<Damage>();

        for (Offer o: offers
             ) {
            damages.add(damageRepository.findDamageById(o.getDamageId()));
        }
        return damages;
    }

    @Override
    public void selectOffer(String damageId, String offerId) {
        Damage damage = damageRepository.findDamageById(damageId);

        damage.setSelectedOffer(offerId);
        damage.setStatus("inProgress");

        damageRepository.save(damage);
    }

}
