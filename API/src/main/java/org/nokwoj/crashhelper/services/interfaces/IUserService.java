package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.Account;
import org.nokwoj.crashhelper.models.ClientRegistrationDto;
import org.nokwoj.crashhelper.models.WorkshopRegistrationDto;

public interface IUserService {
    int registerNewWorkshop(WorkshopRegistrationDto workshopDto);
    int registerNewClient(ClientRegistrationDto clietnDto);

    Account registerAccount(String email, String password, String role);
}
