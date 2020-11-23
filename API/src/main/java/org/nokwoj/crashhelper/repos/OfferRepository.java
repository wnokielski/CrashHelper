package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Offer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface OfferRepository extends MongoRepository<Offer, String> {
    ArrayList<Offer> findAllByWorkshopId(String workshopId);
}
