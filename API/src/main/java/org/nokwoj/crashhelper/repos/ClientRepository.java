package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Account;
import org.nokwoj.crashhelper.models.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends MongoRepository<Client, String> {
    public Client findByAccount(Account account);
    public Client findClientByAccount(Account account);
}
