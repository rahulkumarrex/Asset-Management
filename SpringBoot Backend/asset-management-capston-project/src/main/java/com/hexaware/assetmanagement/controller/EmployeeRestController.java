package com.hexaware.assetmanagement.controller;

import java.util.List;
import java.util.Optional;

import javax.management.relation.Role;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.hexaware.assetmanagement.dto.AuthRequest;
import com.hexaware.assetmanagement.dto.EmployeeDTO;
import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.service.IEmployeeService;
import com.hexaware.assetmanagement.service.JwtService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/employee")

public class EmployeeRestController {

	@Autowired
	IEmployeeService service;

	@Autowired
	private JwtService jwtService;

	@Autowired
	AuthenticationManager authenticationManager;

	private static final Logger logger = LoggerFactory.getLogger(EmployeeRestController.class);

	@PostMapping(value="/addNewEmployee", consumes = "application/json", produces = "application/json")
	public Employee addNewAsset(@RequestBody EmployeeDTO employeeDTO) {
		logger.info("Adding new employee: {}", employeeDTO);

		return service.addEmployee(employeeDTO);

	}

	@GetMapping("/displayAllEmployees")
	@PreAuthorize("hasAuthority('Admin')")
	public List<Employee> diplayAllAssets() {
		logger.info("Displaying all employees");

		return service.viewAllEmployees();

	}

	@GetMapping("/displayEmployeeById/{employeeId}")
//	@PreAuthorize("hasAuthority('Admin')")
	public Employee
	displayEmployeeById(@PathVariable int employeeId) throws EmployeeNotFoundException {
		logger.info("Displaying employee with ID: {}", employeeId);
		return service.searchEmployeeById(employeeId);

	}

	@GetMapping("displayEmployeesByName/{employeeName}")
//	@PreAuthorize("hasAuthority('Admin')")
	public Optional<Employee[]> displayEmployeeByName(@PathVariable String employeeName)
			throws EmployeeNotFoundException {
		logger.info("Displaying employee with name: {}", employeeName);
		return service.searchEmployeesByName(employeeName);
	}

	@PutMapping("/updateEmployeeDetail")
	@PreAuthorize("hasAuthority('Admin')")
	public Employee updateEmployeeInfo(@RequestBody EmployeeDTO employeeDTO) {
		logger.info("Updating employee info: {}", employeeDTO);
		return service.updateEmployeeInfo(employeeDTO);
	}

	@DeleteMapping("/removeEmployeeDetail/{employeeId}")
	@PreAuthorize("hasAuthority('Admin')")
	public String removeEmployee(@PathVariable int employeeId) {
		logger.info("Removing employee with ID: {}", employeeId);

		return service.removeEmployee(employeeId);
	}
	
	
	@PostMapping("/login/authenticate")
	public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getemail(), authRequest.getPassword()));
		String token = null;
		if (authentication.isAuthenticated()) {
			token = jwtService.generateToken(authRequest.getemail());
		} else {
			throw new UsernameNotFoundException("Email or Password is invalid");
		}
		return token;
	}
	
	@PutMapping("/makeAdmin/{eid}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public Employee makeAdmin(@PathVariable int eid) throws InvalidEntryException, EmployeeNotFoundException {
		logger.info("updated Role to 'Admin'");
		return service.makeAdmin(eid);
	}

	
	
	@GetMapping("/getrole/{email}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public String getRole(@PathVariable String email) {
		return service.getEmployeeByEmail(email);
	}
	
	@GetMapping("/getid/{email}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public int getId(@PathVariable String email) {
		return service.getEmployeeIdByEmail(email);
	}

}
