package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.DamageRegistrationDto;

public interface IDamageService {
    String registerNewDamage(DamageRegistrationDto damage);
}
