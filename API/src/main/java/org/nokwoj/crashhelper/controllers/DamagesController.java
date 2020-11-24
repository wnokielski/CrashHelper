package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.ClientRegistrationDto;
import org.nokwoj.crashhelper.models.Damage;
import org.nokwoj.crashhelper.models.DamageRegistrationDto;
import org.nokwoj.crashhelper.models.OfferDto;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.services.implementations.DamageService;
import org.nokwoj.crashhelper.services.implementations.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

@RestController
@RequestMapping("/api/damages")
public class DamagesController {

    @Autowired
    DamageRepository repo;

    @Autowired
    DamageService damageService;

    @Autowired
    FileService fileService;

    @PostMapping("/registerDamage")
    @ResponseStatus(HttpStatus.CREATED)
    public String registerDamage(@RequestPart("photos") MultipartFile[] photos, @RequestPart("crashData") DamageRegistrationDto crashData){
        return damageService.registerNewDamage(crashData, photos);
    }

    @GetMapping("/{status}/{clientId}")
    public ArrayList<Damage> getDamagesByStatusAndUserId(@PathVariable String status, @PathVariable String clientId) {
        return repo.findAllByStatusAndClientId(status, clientId);
    }

    @GetMapping("/{status}")
    public ArrayList<Damage> getDamagesByStatus(@PathVariable String status) {
        return repo.findAllByStatus(status);
    }

    @GetMapping("/waitingForPricing/{workshopId}")
    public ArrayList<Damage> getDamagesWaitingForPricing(@PathVariable String workshopId) {
        return damageService.getDamagesWaitingForPricing(workshopId);
    }

    @GetMapping("/photos/{filename}")
    public Resource getDamagePhotoByFilename(@PathVariable String filename){
        return fileService.getPhoto(filename);
    }

    @PostMapping("/priceDamage")
    @ResponseStatus(HttpStatus.CREATED)
    public void priceDamage(@RequestBody OfferDto offerDto){
        damageService.priceDamage(offerDto);
    }

    @GetMapping("/priced/workshop/{workshopId}")
    public ArrayList<Damage> getPricedDamagesWorkshop(@PathVariable String workshopId) {
        return damageService.getPricedDamagesWorkshop(workshopId);
    }

    @GetMapping("/priced/client/{clientId}")
    public ArrayList<Damage> getPricedDamagesClient(@PathVariable String clientId) {
        return damageService.getPricedDamagesClient(clientId);
    }

    @GetMapping("/workshop/inProgress/{workshopId}")
    public ArrayList<Damage> getDamagesInProgressByWorkshopId(@PathVariable String workshopId) {
        return damageService.getDamagesInProgressByWorkshopId(workshopId);
    }

    @GetMapping("/workshop/completed/{workshopId}")
    public ArrayList<Damage> getDamagesCompletedByWorkshopId(@PathVariable String workshopId) {
        return damageService.getDamagesCompletedByWorkshopId(workshopId);
    }

    @PatchMapping("/selectOffer/{damageId}/{offerId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void selectOffer(@PathVariable String damageId, @PathVariable String offerId){
        damageService.selectOffer(damageId, offerId);
    }

    @PatchMapping("/completeDamage/{damageId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void completeDamage(@PathVariable String damageId){
        damageService.completeDamage(damageId);
    }


}
