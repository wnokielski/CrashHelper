package org.nokwoj.crashhelper.services.interfaces;

import org.nokwoj.crashhelper.models.OfferResponseDto;

import java.util.ArrayList;

public interface IOfferService {
    ArrayList<OfferResponseDto> getDamageOffers(String damageId);
}
