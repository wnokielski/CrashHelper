package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.ClientRegistrationDto;
import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.services.implementations.DamageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/damages")
public class DamagesController {

    @Autowired
    DamageRepository repo;

    @Autowired
    DamageService damageService;

//    @PostMapping("/registerDamage")
//    @ResponseStatus(HttpStatus.CREATED)
//    public String registerDamage(@RequestPart("photos") MultipartFile photos, @RequestPart("crashData") DamageRegistrationDto crashData){
//        String result = damageService.registerNewDamage(crashData);
//        return result;
//    }

    @PostMapping("/registerDamage")
    @ResponseStatus(HttpStatus.CREATED)
    public String registerDamage(@RequestPart("photos") MultipartFile[] photos, @RequestPart("crashData") DamageRegistrationDto crashData){
        return damageService.registerNewDamage(crashData, photos);
    }
}
