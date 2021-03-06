package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.nokwoj.crashhelper.models.Workshop;
import org.nokwoj.crashhelper.repos.WorkshopRepository;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/workshops")
public class WorkshopsController {

    @Autowired
    WorkshopRepository repo;

    @GetMapping
    public ArrayList<Workshop> getAllWorkshops(){
        return (ArrayList<Workshop>) repo.findAll();
    }

    @GetMapping("/byId/{id}")
    public Optional<Workshop> getWorkshopById(@PathVariable String id){
        return repo.findById(id);
    }


}

