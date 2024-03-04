package com.hexaware.assetmanagement.entities;

import java.time.LocalDate;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotNull;

@Entity
public class AssetRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "employee-sequence")
 	@SequenceGenerator(name = "employee-sequence", sequenceName = "employee_sequence", initialValue = 301)
	private int requestId;
	

    private String requestType="New Asset" ; 
    private LocalDate dateRequested = LocalDate.now();
    
    private String status = "Pending";
	
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "AssetID")
    @NotNull
    private Asset asset;
    
	@ManyToOne
    @JoinColumn(name = "EmployeeID")
	@NotNull
    private Employee employee;

	public int getRequestId() {
		return requestId;
	}

	public void setRequestId(int requestId) {
		this.requestId = requestId;
	}

	public String getRequestType() {
		return requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public LocalDate getDateRequested() {
		return dateRequested;
	}

	public void setDateRequested(LocalDate dateRequested) {
		this.dateRequested = dateRequested;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Asset getAsset() {
		return asset;
	}

	public void setAsset(Asset asset) {
		this.asset = asset;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public AssetRequest(int requestId, String requestType, LocalDate dateRequested, String status, Asset asset,
			Employee employee) {
		super();
		this.requestId = requestId;
		this.requestType = requestType;
		this.dateRequested = dateRequested;
		this.status = status;
		this.asset = asset;
		this.employee = employee;
	}

	public AssetRequest() {
		super();
	}

	
	
}
