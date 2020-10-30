package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.ClientRegistrationDto;
import org.nokwoj.crashhelper.models.WorkshopRegistrationDto;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    IUserService userService;

    @PostMapping("/register/workshop")
    @ResponseStatus(HttpStatus.CREATED)
    public int registerWorkshop(@RequestBody WorkshopRegistrationDto workshopDto){
        int result = userService.registerNewWorkshop(workshopDto);
        return result;
    }

    @PostMapping("/register/client")
    @ResponseStatus(HttpStatus.CREATED)
    public int registerClient(@RequestBody ClientRegistrationDto clientDto){
        int result = userService.registerNewClient(clientDto);
        return result;
    }
}
