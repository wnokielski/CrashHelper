package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Offer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends MongoRepository<Offer, String> {
}
