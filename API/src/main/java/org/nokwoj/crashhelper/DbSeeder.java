package org.nokwoj.crashhelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.nokwoj.crashhelper.models.Opinion;
import org.nokwoj.crashhelper.models.Workshop;
import org.nokwoj.crashhelper.repos.WorkshopRepository;

@Component
public class DbSeeder implements CommandLineRunner {

    @Autowired
    private WorkshopRepository workshopRepository;

    //initialize database
    boolean initializeDatabase = false;

    @Override
    public void run(String... strings){

//        if(initializeDatabase){
//            this.workshopRepository.deleteAll();
//
//            Workshop w1 = new Workshop("U szwagra", "Wrocław", "Kamienna", 1, 509239485);
//
//            Opinion o1 = new Opinion("1", 5, "Bardzo dobra robota!");
//            Opinion o2 = new Opinion("1", 2, "Strasznie słabo");
//            Opinion o3 = new Opinion("1", 1, "Nie polecam");
//
//            w1.addOpinion(o1);
//            w1.addOpinion(o2);
//            w1.addOpinion(o3);
//
//            this.workshopRepository.save(w1);
//        }

    }


}
