package com.TravelWebsite.BE.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.TravelWebsite.BE.dto.TourDTO;
import com.TravelWebsite.BE.entity.Tour;
import com.TravelWebsite.BE.repository.TourRepository;

@Service
public class TourService {

    @Autowired
    private TourRepository tourRepository;

    public List<TourDTO> getAllTours() {
        try {
            List<Tour> tours = tourRepository.findAll();
            if (tours.isEmpty()) {
                return List.of();  // Trả về danh sách rỗng nếu không có dữ liệu
            }
            return tours.stream().map(this::convertToDTO).collect(Collectors.toList());
        } catch (Exception e) {
            throw new RuntimeException("Lỗi khi lấy danh sách tours", e);
        }
    }    

    public TourDTO addTour(TourDTO tourDTO) {
        Tour tour = convertToEntity(tourDTO);
        tour = tourRepository.save(tour);
        return convertToDTO(tour);
    }

    public TourDTO updateTour(Long id, TourDTO tourDTO) {
        Tour tour = tourRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tour không tồn tại"));
        tour.setTourName(tourDTO.getTourName());
        tour.setDescription(tourDTO.getDescription());
        tour.setLocation(tourDTO.getLocation());
        tour.setPrice(tourDTO.getPrice());
        tour.setStartDate(tourDTO.getStartDate());
        tour.setEndDate(tourDTO.getEndDate());
        tour.setImagePath(tourDTO.getImagePath());
        tour.setTourType(tourDTO.getTourType()); // ⚠️ Chắc chắn rằng TourType đang là Enum
        tour = tourRepository.save(tour);
        return convertToDTO(tour);
    }

    public void deleteTour(Long id) {
        tourRepository.deleteById(id);
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
        tourDTO.setTourType(tour.getTourType()); // ⚠️ Chắc chắn rằng TourType đang là Enum
        return tourDTO;
    }

    private Tour convertToEntity(TourDTO tourDTO) {
        Tour tour = new Tour();
        tour.setTourName(tourDTO.getTourName());
        tour.setDescription(tourDTO.getDescription());
        tour.setLocation(tourDTO.getLocation());
        tour.setPrice(tourDTO.getPrice());
        tour.setStartDate(tourDTO.getStartDate());
        tour.setEndDate(tourDTO.getEndDate());
        tour.setImagePath(tourDTO.getImagePath());
        tour.setTourType(tourDTO.getTourType()); // ⚠️ Chắc chắn rằng TourType đang là Enum
        return tour;
    }
}