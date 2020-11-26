package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.Opinion;
import org.nokwoj.crashhelper.models.OpinionDto;

import java.util.ArrayList;

public interface IOpinionService {
    ArrayList<Opinion> getOpinionsByWorkshopId(String workshopId);
    ArrayList<Opinion> getOpinionsByClientId(String clientId);
    String addOpinion(OpinionDto opinionDto);
}
