package com.spring.datajpa.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spring.datajpa.model.Employee;//название файла. подключили сущность 
import com.spring.datajpa.repository.Repository;//название файла. подключили репозиторий

@RestController//аннотация, что делает код контроллером
@RequestMapping("/employees")//путь для всех методов. здесь пойдет микросервис
public class EmployeeController {
    @Autowired//ищет класс с названием Repository
    private Repository repository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @DeleteMapping("/{id}")
    public void removeEmployee(@PathVariable Long id) {
        repository.deleteById(id);
    }
}