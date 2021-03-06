package org.nokwoj.crashhelper.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Opinion {

    @Id
    private String id;

    private String clientId;

    private String workshopId;

    private String damageId;

    private String description;

    private int rate;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getWorkshopId() {
        return workshopId;
    }

    public void setWorkshopId(String workshopId) {
        this.workshopId = workshopId;
    }

    public String getDamageId() {
        return damageId;
    }

    public void setDamageId(String damageId) {
        this.damageId = damageId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public Opinion(){};

    public Opinion(String damageId, String clientId, String workshopId, String description, int rate){
        this.damageId = damageId;
        this.clientId = clientId;
        this.workshopId = workshopId;
        this.description = description;
        this.rate = rate;
    }

}