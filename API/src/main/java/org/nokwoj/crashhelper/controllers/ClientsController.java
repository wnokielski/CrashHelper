package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.Client;
import org.nokwoj.crashhelper.repos.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ClientsController {

    @Autowired
    ClientRepository repo;

    @GetMapping("/byId/{id}")
    public Optional<Client> getClientById(@PathVariable String id){
        return repo.findById(id);
    }


}

