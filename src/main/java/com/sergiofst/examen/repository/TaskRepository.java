package com.sergiofst.examen.repository;

import com.sergiofst.examen.domain.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {
    Optional<Task> findById(Long id);
}
