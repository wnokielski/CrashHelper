package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.Offer;
import org.nokwoj.crashhelper.models.OfferResponseDto;
import org.nokwoj.crashhelper.models.Workshop;
import org.nokwoj.crashhelper.repos.DamageRepository;
import org.nokwoj.crashhelper.repos.OfferRepository;
import org.nokwoj.crashhelper.repos.WorkshopRepository;
import org.nokwoj.crashhelper.services.interfaces.IOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class OfferService implements IOfferService {

    @Autowired
    OfferRepository offerRepo;

    @Autowired
    WorkshopRepository workshopRepo;

    @Override
    public ArrayList<OfferResponseDto> getDamageOffers(String damageId) {
        ArrayList<Offer> offers = offerRepo.findAllByDamageId(damageId);

        ArrayList<OfferResponseDto> response = new ArrayList<OfferResponseDto>();

        Workshop workshop ;

        for (Offer o: offers
             ) {
            workshop = workshopRepo.findWorkshopById(o.getWorkshopId());
            response.add(new OfferResponseDto(
                    o.getId(),
                    workshop.getName(),
                    workshop.getCity(),
                    o.getValue(),
                    o.getDescription(),
                    workshop.getRating()));
        }

        return response;
    }
}
