package com.TravelWebsite.BE.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.TravelWebsite.BE.entity.TourType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TourDTO {
    private Long tourId;
    private String tourName;
    private String description;
    private String location;
    private BigDecimal price;
    private LocalDate startDate;
    private LocalDate endDate;
    private String imagePath;
    private TourType tourType;  // Đổi từ String sang Enum
        // Getter và Setter
        public TourType getTourType() {
            return tourType;
        }
    
        public void setTourType(TourType tourType) {
            this.tourType = tourType;
        }
}
