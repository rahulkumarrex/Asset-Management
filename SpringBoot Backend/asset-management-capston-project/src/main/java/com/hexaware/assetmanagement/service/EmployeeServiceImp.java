package com.hexaware.assetmanagement.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hexaware.assetmanagement.dto.EmployeeDTO;
import com.hexaware.assetmanagement.entities.AssetRequest;
import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements IEmployeeService {

	@Autowired
	private EmployeeRepository repo;
	
	@Autowired 
	PasswordEncoder passwordEncoder;

	Logger logger = LoggerFactory.getLogger(EmployeeServiceImp.class);

	@Override
	public List<Employee> viewAllEmployees() {

		return repo.findAll();
	}

	@Override
	public Employee addEmployee(EmployeeDTO emp) {

		logger.info(emp + " is Added from Add Service");

		Employee employee = new Employee();
		employee.setEmployeeId(emp.getEmployeeId());
		employee.setEmployeeName(emp.getEmployeeName());
		employee.setEmail(emp.getEmail());
		employee.setPassword(passwordEncoder.encode(emp.getPassword()));
		employee.setGender(emp.getGender());
		employee.setContact(emp.getContact());
		employee.setAddress(emp.getAddress());
		employee.setRole("User");
		return repo.save(employee);
	}

	@Override
	public Employee searchEmployeeById(int employeeId) throws EmployeeNotFoundException {
		Employee emp = repo.findById(employeeId).orElse(null);
		if (emp != null) {
			return emp;
		} else
			throw new EmployeeNotFoundException("Employee with employeeId:: " + employeeId + " doesn't esxist!!");

	}
	
	

	@Override
	public Employee updateEmployeeInfo(EmployeeDTO employee) {

	        logger.info("Updating employee information: {}", employee);
	        Employee updatedEmployee = new Employee();
	        updatedEmployee.setEmployeeId(employee.getEmployeeId());
	        updatedEmployee.setEmployeeName(employee.getEmployeeName());
	        updatedEmployee.setEmail(employee.getEmail());
	        updatedEmployee.setPassword(employee.getPassword());
	        updatedEmployee.setGender(employee.getGender());
	        updatedEmployee.setContact(employee.getContact());
	        updatedEmployee.setAddress(employee.getAddress());
	        updatedEmployee.setRole(employee.getRole());
	        return repo.save(updatedEmployee);
	}

	@Override
	public String removeEmployee(int employeeId) {
		repo.deleteById(employeeId);
		return "Employee has been removed";
	}

	@Override
	public Optional<Employee[]> searchEmployeesByName(String employeeName) throws EmployeeNotFoundException {
		Optional<Employee[]> employees = repo.employeesByName(employeeName);

		if (!employees.isEmpty()) {
			return employees;
		} else {
			throw new EmployeeNotFoundException("Employee with name " + employeeName + " not found.");
		}
	}

	@Override
	public Employee makeAdmin(int eid) throws InvalidEntryException, EmployeeNotFoundException {
		Employee employee = repo.findById(eid).orElse(null);
		 logger.info("Updating employee role: {}");
		 employee.setRole("Admin");
		 return repo.save(employee);
	}

	@Override
	public String getEmployeeByEmail(String email) {
		String role = repo.getRoleByEmail(email);
		logger.info(role);
		return role;
	}

	@Override
	public int getEmployeeIdByEmail(String email) {
		
		int empId = repo.getIdByEmail(email);
		return empId;
	}

	

}
