package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.nokwoj.crashhelper.models.Workshop;

@Repository
public interface WorkshopRepository extends MongoRepository<Workshop, String> {
    public Workshop findWorkshopByAccount(Account account);
}
