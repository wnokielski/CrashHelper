package org.nokwoj.crashhelper.controllers;

import org.nokwoj.crashhelper.models.Opinion;
import org.nokwoj.crashhelper.models.OpinionDto;
import org.nokwoj.crashhelper.services.implementations.OpinionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/opinions")
public class OpinionsController {

    @Autowired
    OpinionService opinionService;

    @GetMapping("/workshop/{workshopId}")
    public ArrayList<Opinion> getWorkshopOpinions(@PathVariable String workshopId){
        return opinionService.getOpinionsByWorkshopId(workshopId);
    }
    @GetMapping("/client/{clientId}")
    public ArrayList<Opinion> getClientOpinions(@PathVariable String clientId){
        return opinionService.getOpinionsByClientId(clientId);
    }


    @PostMapping("/addOpinion")
    @ResponseStatus(HttpStatus.CREATED)
    public String addOpinion(@RequestBody OpinionDto opinionDto){
        return opinionService.addOpinion(opinionDto);
    }
}
