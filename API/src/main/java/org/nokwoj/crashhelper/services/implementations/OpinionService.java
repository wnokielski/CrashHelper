package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.*;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.repos.OfferRepository;
import org.nokwoj.crashhelper.repos.OpinionRepository;
import org.nokwoj.crashhelper.repos.WorkshopRepository;
import org.nokwoj.crashhelper.services.interfaces.IOpinionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OpinionService implements IOpinionService {

    @Autowired
    OpinionRepository opinionRepository;

    @Autowired
    DamageRepository damageRepository;

    @Autowired
    WorkshopRepository workshopRepository;

    @Autowired
    OfferRepository offerRepository;

    @Override
    public ArrayList<Opinion> getOpinionsByWorkshopId(String workshopId) {
        return opinionRepository.findAllByWorkshopId(workshopId);
    }

    @Override
    public ArrayList<Opinion> getOpinionsByClientId(String clientId) {
        return opinionRepository.findAllByClientId(clientId);
    }

    @Override
    public String addOpinion(OpinionDto opinionDto) {
        Damage damage = damageRepository.findDamageById(opinionDto.getDamageId());
        Offer offer = offerRepository.findOfferById(damage.getSelectedOffer());
        Workshop workshop = workshopRepository.findWorkshopById(offer.getWorkshopId());

        int opinionsCount = opinionRepository.findAllByWorkshopId(workshop.getId()).size();

        //calculate average rate
        if(opinionsCount > 0){
            float currentSum = workshop.getRating() * opinionsCount;
            float newRating = (currentSum + opinionDto.getRate())/(opinionsCount + 1);
            workshop.setRating(newRating);
        } else{
            workshop.setRating(opinionDto.getRate());
        }

        Opinion opinion = new Opinion(opinionDto.getDamageId(),
                opinionDto.getClientId(),
                workshop.getId(),
                opinionDto.getDescription(),
                opinionDto.getRate());

        String id = opinionRepository.save(opinion).getId();
        workshopRepository.save(workshop);

        return id;
    }
}
