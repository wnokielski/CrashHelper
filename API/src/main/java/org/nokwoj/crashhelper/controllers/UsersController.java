package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.*;
import org.nokwoj.crashhelper.repos.ClientRepository;
import org.nokwoj.crashhelper.repos.WorkshopRepository;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.implementations.MyUserDetailsService;
import org.nokwoj.crashhelper.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    IUserService userService;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    WorkshopRepository workshopRepository;

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

    @GetMapping("/authorize")
    @ResponseStatus(HttpStatus.OK)
    public String authorize(){
        return "Authorized";
    }

    @GetMapping("/session")
    public UserLoginDto getUserDetails(Authentication auth){
        MyUserDetails userDetails = (MyUserDetails) auth.getPrincipal();

        UserLoginDto loginDto = new UserLoginDto();

        if(userDetails.getAuthorities().toString().equals("[CLIENT]"))
            loginDto.setUserId(clientRepository.findClientByAccount(userDetails.getAccount()).getId());
        else
            loginDto.setUserId(workshopRepository.findWorkshopByAccount(userDetails.getAccount()).getId());

        loginDto.setUserType(userDetails.getAuthorities().toString());

        return loginDto;
    }
}
