package org.nokwoj.crashhelper.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document
public class Damage {

    @Id
    private String id;

    private String clientId;

    private String workshopId;

    private String vehicleMake;

    private String vehicleModel;

    private Integer productionYear;

    private ArrayList<String> photos;

    private String description;

    private String status;

    private Offer selectedOffer;

    public Damage(){
    }

    public Damage(String clientId, String vehicleMake, String vehicleModel, Integer productionYear, ArrayList<String> photos, String description){
        this.clientId = clientId;
        this.vehicleMake = vehicleMake;
        this.vehicleModel = vehicleModel;
        this.productionYear = productionYear;
        this.photos = photos;
        this.description = description;
        this.status = "new";
        this.workshopId = null;
        this.selectedOffer = null;
    }

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

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public Integer getProductionYear() {
        return productionYear;
    }

    public void setProductionYear(Integer productionYear) {
        this.productionYear = productionYear;
    }

    public ArrayList<String> getPhotos() {
        return photos;
    }

    public void setPhotos(ArrayList<String> photos) {
        this.photos = photos;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Offer getSelectedOffer() {
        return selectedOffer;
    }

    public void setSelectedOffer(Offer selectedOffer) {
        this.selectedOffer = selectedOffer;
    }
}
