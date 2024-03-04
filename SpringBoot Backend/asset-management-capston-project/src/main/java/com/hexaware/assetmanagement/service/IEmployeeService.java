package com.hexaware.assetmanagement.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.assetmanagement.dto.EmployeeDTO;
import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

public interface IEmployeeService {

	public List<Employee> viewAllEmployees();

	public Employee addEmployee(EmployeeDTO emp);

	public Employee searchEmployeeById(int employeeId) throws EmployeeNotFoundException;

	public Employee updateEmployeeInfo(EmployeeDTO employeeDTO);

	public String removeEmployee(int employeeId);

	public Optional<Employee[]> searchEmployeesByName(String employeeName) throws EmployeeNotFoundException;
	
	public Employee makeAdmin(int eid) throws InvalidEntryException, EmployeeNotFoundException;
	
	public String getEmployeeByEmail(String email);
	
	public int getEmployeeIdByEmail(String email);
	
}
