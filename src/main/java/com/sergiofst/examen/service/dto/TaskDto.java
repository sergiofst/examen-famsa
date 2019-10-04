package com.sergiofst.examen.service.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class TaskDto {
    @NotNull
    String title;
    @NotNull
    String description;
}
