package com.sergiofst.examen.service;

import com.sergiofst.examen.domain.Task;
import com.sergiofst.examen.service.dto.TaskDto;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    Task createTask(TaskDto taskDto);

    Task updateTask(TaskDto taskDto, Long id);

    Optional<Task> findTask(Long id);

    void deleteTask(Long id);

    List<Task> findTasks();
}
