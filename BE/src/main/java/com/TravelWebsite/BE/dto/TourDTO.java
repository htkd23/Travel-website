package com.TravelWebsite.BE.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class TourDTO {
    private Long tourId;
    private String tourName;
    private String description;
    private String location;
    private BigDecimal price;
    private LocalDate startDate;
    private LocalDate endDate;
    private String imagePath;
    private String tourType;
}