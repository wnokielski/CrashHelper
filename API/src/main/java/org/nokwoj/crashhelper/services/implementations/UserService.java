package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.Account;
import org.nokwoj.crashhelper.models.Workshop;
import org.nokwoj.crashhelper.models.WorkshopRegistrationDto;
import org.nokwoj.crashhelper.repos.AccountRepository;
import org.nokwoj.crashhelper.repos.WorkshopRepository;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    WorkshopRepository workshopRepository;

    @Override
    public int registerNewWorkshop(WorkshopRegistrationDto workshopDto){
        if(accountRepository.findAccountByEmail(workshopDto.getEmail()) != null) return Consts.emailAlreadyUsed;

        Account account = this.registerAccount(workshopDto.getEmail(), workshopDto.getPassword(), "WORKSHOP");

        String accountId = account.getId();

        Workshop workshop = new Workshop();
        workshop.setCity(workshopDto.getCity());
        workshop.setName(workshopDto.getName());
        workshop.setStreet(workshopDto.getStreet());
        workshop.setStNumber(workshopDto.getStNumber());
        workshop.setPhoneNumber(workshopDto.getPhoneNumber());
        workshop.setOpinions(null);
        workshop.setAccount(account);
        workshopRepository.save(workshop);

        return Consts.registrationSuccess;
    }

    public Account registerAccount(String email, String password, String role){

        Account account = new Account();
        account.setEmail(email);
        account.setPassword(password);
        account.setRole(role);

        return accountRepository.save(account);
    }
}
