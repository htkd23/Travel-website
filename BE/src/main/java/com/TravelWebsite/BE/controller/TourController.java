package com.TravelWebsite.BE.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TravelWebsite.BE.dto.TourDTO;
import com.TravelWebsite.BE.service.TourService;

@RestController
@RequestMapping("/api/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @GetMapping
    public List<TourDTO> getAllTours() {
        return tourService.getAllTours();
    }

    @PostMapping
    public TourDTO addTour(@RequestBody TourDTO tourDTO) {
        return tourService.addTour(tourDTO);
    }

    @PutMapping("/{id}")
    public TourDTO updateTour(@PathVariable Long id, @RequestBody TourDTO tourDTO) {
        return tourService.updateTour(id, tourDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteTour(@PathVariable Long id) {
        tourService.deleteTour(id);
    }
}