package org.nokwoj.crashhelper.models;

public class OfferResponseDto {

    private String id;

    private String workshopName;

    private String workshopCity;

    private int price;

    private String description;

    private float workshopRating;

    public OfferResponseDto(String id, String workshopName, String workshopCity, int price, String description, float workshopRating){
        this.id = id;
        this.workshopName = workshopName;
        this.workshopCity = workshopCity;
        this.price = price;
        this.description = description;
        this.workshopRating = workshopRating;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWorkshopName() {
        return workshopName;
    }

    public void setWorkshopName(String workshopName) {
        this.workshopName = workshopName;
    }

    public String getWorkshopCity() {
        return workshopCity;
    }

    public void setWorkshopCity(String workshopCity) {
        this.workshopCity = workshopCity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getWorkshopRating() {
        return workshopRating;
    }

    public void setWorkshopRating(float workshopRating) {
        this.workshopRating = workshopRating;
    }
}
