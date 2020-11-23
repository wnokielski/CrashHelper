package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.models.OfferDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

public interface IDamageService {
    String registerNewDamage(DamageRegistrationDto damage, MultipartFile[] photos);
    void priceDamage(OfferDto offerDto);
    ArrayList<Damage> getDamagesWaitingForPricing(String workshopId);
}
