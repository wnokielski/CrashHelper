package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.OfferResponseDto;
import org.nokwoj.crashhelper.services.implementations.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/offers")
public class OffersController {

    @Autowired
    OfferService offerService;

    @GetMapping("/damage/{damageId}")
    public ArrayList<OfferResponseDto> getDamageOffers(@PathVariable String damageId){
        return offerService.getDamageOffers(damageId);
    }
}
