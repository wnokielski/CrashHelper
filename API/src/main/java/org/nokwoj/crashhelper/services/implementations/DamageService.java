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
}
