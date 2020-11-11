package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Damage;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DamageRepository extends MongoRepository<Damage, String> {
}
