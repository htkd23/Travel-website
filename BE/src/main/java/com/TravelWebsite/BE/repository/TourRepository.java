package com.TravelWebsite.BE.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TravelWebsite.BE.entity.Tour;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {
}