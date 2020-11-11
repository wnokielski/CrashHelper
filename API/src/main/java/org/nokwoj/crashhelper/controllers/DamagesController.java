package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.ClientRegistrationDto;
import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.services.implementations.DamageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/damages")
public class DamagesController {

    @Autowired
    DamageRepository repo;

    @Autowired
    DamageService damageService;

    @PostMapping("/registerDamage")
    @ResponseStatus(HttpStatus.CREATED)
    public String registerDamage(@RequestBody DamageRegistrationDto damageDto){
        String result = damageService.registerNewDamage(damageDto);
        return result;
    }
}
