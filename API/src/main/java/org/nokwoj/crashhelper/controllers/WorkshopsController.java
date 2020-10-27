package org.nokwoj.crashhelper.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.nokwoj.crashhelper.models.Workshop;
import org.nokwoj.crashhelper.repos.WorkshopRepository;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/workshops")
public class WorkshopsController {

    @Autowired
    WorkshopRepository repo;

    @GetMapping
    public ArrayList<Workshop> getAllEvents(){
        return (ArrayList<Workshop>) repo.findAll();
    }


}

