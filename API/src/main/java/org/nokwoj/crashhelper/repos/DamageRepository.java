package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Damage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface DamageRepository extends MongoRepository<Damage, String> {
    public ArrayList<Damage> findAllByStatusAndClientId(String status, String clientId);
    public ArrayList<Damage> findAllByStatus(String status);
    public Damage findDamageById(String id);
    public ArrayList<Damage> findAllByStatusIn(ArrayList<String> statusList);
}
