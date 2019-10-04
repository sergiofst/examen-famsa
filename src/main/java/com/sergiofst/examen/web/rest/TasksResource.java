package com.sergiofst.examen.web.rest;

import com.sergiofst.examen.domain.Task;
import com.sergiofst.examen.service.TaskService;
import com.sergiofst.examen.service.dto.TaskDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TasksResource {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public Task createTask(@Valid @RequestBody TaskDto taskDto) {
        return taskService.createTask(taskDto);
    }

    @GetMapping
    public List<Task> findTasks() {
        return taskService.findTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> findTask(@PathVariable Long id) {
        return taskService.findTask(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public Task updateTask(@Valid @RequestBody TaskDto taskDto, @PathVariable Long id) {
        return taskService.updateTask(taskDto, id);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
    }

}
