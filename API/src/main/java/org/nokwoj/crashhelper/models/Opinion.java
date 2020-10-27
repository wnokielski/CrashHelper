package org.nokwoj.crashhelper.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class Opinion {

    private String userId;

    private String text;

    private int value;

    public Opinion(String userId, int value, String text) {
        this.userId = userId;
        this.value = value;
        this.text = text;
    }
}