package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.interfaces.IDamageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DamageService implements IDamageService {

    @Autowired
    DamageRepository damageRepository;

    @Override
    public String registerNewDamage(DamageRegistrationDto damage) {

        Damage newDamage = new Damage(damage.getClientId(),
                damage.getVehicleMake(),
                damage.getVehicleModel(),
                damage.getProductionYear(),
                null,
                damage.getDescription());
        Damage result = damageRepository.save(newDamage);

        return result.getId();
    }
}
