package org.nokwoj.crashhelper.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document
public class Workshop {

    @Id
    private String id;

    private String name;

    private String city;

    private String street;

    private int stNumber;

    private int phoneNumber;

    @DBRef
    private Account account;

    private ArrayList<Opinion> opinions = new ArrayList<Opinion>();

    public Workshop() {}

    public Workshop(String name, String city, String street, int stNumber, int phoneNumber){
        this.name = name;
        this.city = city;
        this.street = street;
        this.stNumber = stNumber;
        this.phoneNumber = phoneNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getStNumber() {
        return stNumber;
    }

    public void setStNumber(int stNumber) {
        this.stNumber = stNumber;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public ArrayList<Opinion> getOpinions() {
        return opinions;
    }

    public void setOpinions(ArrayList<Opinion> opinions) {
        this.opinions = opinions;
    }

    public void addOpinion(Opinion o){
        this.opinions.add(o);
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
