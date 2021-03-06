package org.nokwoj.crashhelper.services.implementations;

import org.nokwoj.crashhelper.models.*;
import org.nokwoj.crashhelper.repos.AccountRepository;
import org.nokwoj.crashhelper.repos.ClientRepository;
import org.nokwoj.crashhelper.repos.WorkshopRepository;
import org.nokwoj.crashhelper.services.Consts;
import org.nokwoj.crashhelper.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService{

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    WorkshopRepository workshopRepository;

    @Autowired
    ClientRepository clientRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public int registerNewWorkshop(WorkshopRegistrationDto workshopDto){
        if(accountRepository.findAccountByEmail(workshopDto.getEmail()) != null) return Consts.emailAlreadyUsed;

        Account account = this.registerAccount(workshopDto.getEmail(), workshopDto.getPassword(), "WORKSHOP");

        Workshop workshop = new Workshop();
        workshop.setCity(workshopDto.getCity());
        workshop.setName(workshopDto.getName());
        workshop.setStreet(workshopDto.getStreet());
        workshop.setStNumber(workshopDto.getStNumber());
        workshop.setPhoneNumber(workshopDto.getPhoneNumber());
        workshop.setAccount(account);
        workshopRepository.save(workshop);

        return Consts.registrationSuccess;
    }

    @Override
    public int registerNewClient(ClientRegistrationDto clientDto){
        if(accountRepository.findAccountByEmail(clientDto.getEmail()) != null) return Consts.emailAlreadyUsed;

        Account account = this.registerAccount(clientDto.getEmail(), clientDto.getPassword(), "CLIENT");

        Client client = new Client();
        client.setName(clientDto.getName());
        client.setSurname(clientDto.getSurname());
        client.setPhoneNumber(clientDto.getPhoneNumber());
        client.setAccount(account);
        clientRepository.save(client);

        return Consts.registrationSuccess;
    }

    public Account registerAccount(String email, String password, String role){

        Account account = new Account();
        account.setEmail(email);
        account.setPassword(passwordEncoder.encode(password));
        account.setRole(role);

        return accountRepository.save(account);
    }
}
