package com.TravelWebsite.BE.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}