package com.hexaware.assetmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	

	@ExceptionHandler({AssetNotFoundException.class})
	public ResponseEntity<String> handleExp1(AssetNotFoundException e) {
		
		return new ResponseEntity<String>(e.toString(),HttpStatus.NOT_ACCEPTABLE);
	}
	
	
	@ExceptionHandler({AssetServiceRequestNotFoundException.class})
	public ResponseEntity<String> handleExp1(AssetServiceRequestNotFoundException e2) {
		
		return new ResponseEntity<String>(e2.toString(),HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler({EmployeeNotFoundException.class})
	public ResponseEntity<String> handleExp1(EmployeeNotFoundException e3) {
		
		return new ResponseEntity<String>(e3.toString(),HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler({AssetRequestNotFoundException.class})
	public ResponseEntity<String> handleExp1(AssetRequestNotFoundException e4) {
		
		return new ResponseEntity<String>(e4.toString(),HttpStatus.NOT_ACCEPTABLE);
	}
	@ExceptionHandler({InvalidEntryException.class})
	public ResponseEntity<String> handleExp1(InvalidEntryException e5) {
		
		return new ResponseEntity<String>(e5.toString(),HttpStatus.NOT_ACCEPTABLE);
	}
	
	
	
	
}