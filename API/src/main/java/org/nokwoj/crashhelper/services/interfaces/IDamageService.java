package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.springframework.web.multipart.MultipartFile;

public interface IDamageService {
    String registerNewDamage(DamageRegistrationDto damage, MultipartFile[] photos);
}
