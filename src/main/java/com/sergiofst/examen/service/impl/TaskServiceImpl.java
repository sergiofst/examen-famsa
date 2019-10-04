package com.sergiofst.examen.service.impl;

import com.sergiofst.examen.domain.Task;
import com.sergiofst.examen.repository.TaskRepository;
import com.sergiofst.examen.service.TaskService;
import com.sergiofst.examen.service.dto.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public Task createTask(TaskDto taskDto) {
        return taskRepository.save(
            Task.builder()
                .title(taskDto.getTitle())
                .description(taskDto.getDescription())
                .createdDate(new Date())
                .build()
        );
    }

    @Override
    public Task updateTask(TaskDto taskDto, Long id) {
        Task task = taskRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("El registro es invalido"));

        task.setTitle(taskDto.getTitle());
        task.setDescription(taskDto.getDescription());

        return taskRepository.save(task);
    }

    @Override
    public Optional<Task> findTask(Long id) {
        return taskRepository.findById(id);
    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.delete(id);
    }

    @Override
    public List<Task> findTasks() {
        return taskRepository.findAll();
    }

}
