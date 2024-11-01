package com.spring.datajpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
  @Id
  private int id;
  @Column(name = "employee_name")
  private String employeeName;
  @Column(name = "designation")
  private String designation;
  @Column(name = "experience")
  private double experience;
  
  public Employee() {
    super();
  }
  public Employee(int id, String employeeName, String designation, double experience) {
    super();
    this.id = id;
    this.employeeName = employeeName;
    this.designation = designation;
    this.experience = experience;
  }
  
  public int getId() {
   return id;
  }
  public void setId(int id) {
    this.id = id;
  }
  public String getEmployeeName() {
    return employeeName;
  }
  public void setEmployeeName(String employeeName) {
    this.employeeName = employeeName;
  }
  public String getDesignation() {
    return designation;
  }
  public void setDesignation(String designation) {
    this.designation = designation;
  }
  public double getExperience() {
    return experience;
  }
  public void setExperience(double experience) {
    this.experience = experience;
  }
  @Override
  public String toString() {
    return "Employee [id=" + id + ", employeeName=" + employeeName + ", designation=" + designation + ", experience=" + experience + "]";
  }
}