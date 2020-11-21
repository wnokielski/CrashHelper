package org.nokwoj.crashhelper.models;

public class OfferDto {

    private String damageId;

    private String workshopId;

    private Integer value;

    private String description;

    public OfferDto() {

    }

    public OfferDto(String damageId, String workshopId, Integer value, String description){
        this.damageId = damageId;
        this.workshopId = workshopId;
        this.value = value;
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDamageId() {
        return damageId;
    }

    public void setDamageId(String damageId) {
        this.damageId = damageId;
    }

    public String getWorkshopId() {
        return workshopId;
    }

    public void setWorkshopId(String workshopId) {
        this.workshopId = workshopId;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
}
