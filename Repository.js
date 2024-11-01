package com.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.datajpa.model.Employee;

@Repository
//Repository берет trycatch+кучу методов (findById...) из JpaRepository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}