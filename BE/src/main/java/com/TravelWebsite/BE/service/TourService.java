package com.TravelWebsite.BE.service;

import com.TravelWebsite.BE.dto.TourDTO;
import com.TravelWebsite.BE.entity.Tour;
import com.TravelWebsite.BE.repository.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TourService {

    @Autowired
    private TourRepository tourRepository;

    public List<TourDTO> getAllTours() {
        List<Tour> tours = tourRepository.findAll();
        return tours.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private TourDTO convertToDTO(Tour tour) {
        TourDTO tourDTO = new TourDTO();
        tourDTO.setTourId(tour.getTourId());
        tourDTO.setTourName(tour.getTourName());
        tourDTO.setDescription(tour.getDescription());
        tourDTO.setLocation(tour.getLocation());
        tourDTO.setPrice(tour.getPrice());
        tourDTO.setStartDate(tour.getStartDate());
        tourDTO.setEndDate(tour.getEndDate());
        tourDTO.setImagePath(tour.getImagePath());
        tourDTO.setTourType(tour.getTourType().name());
        return tourDTO;
    }
}