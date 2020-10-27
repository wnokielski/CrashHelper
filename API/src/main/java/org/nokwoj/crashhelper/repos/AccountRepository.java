package org.nokwoj.crashhelper.repos;

import org.nokwoj.crashhelper.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends MongoRepository<Account, String> {
    Account findAccountByEmail(String email);
}