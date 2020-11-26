package org.nokwoj.crashhelper.models;

public class OpinionDto {

    private String clientId;

    private String damageId;

    private String description;

    private int rate;

    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
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

    public OpinionDto(){};

    public OpinionDto(String damageId, String clientId, String description, int rate){
        this.damageId = damageId;
        this.clientId = clientId;
        this.description = description;
        this.rate = rate;
    }
}
