package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Opinion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface OpinionRepository extends MongoRepository<Opinion, String> {
    ArrayList<Opinion> findAllByClientId(String clientId);
    Opinion findOpinionByDamageId(String damageId);
    ArrayList<Opinion> findAllByDamageId(String damageId);
    ArrayList<Opinion> findAllByWorkshopId(String workshopId);
}
