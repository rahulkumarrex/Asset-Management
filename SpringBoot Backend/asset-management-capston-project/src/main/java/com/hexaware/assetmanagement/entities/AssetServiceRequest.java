package com.hexaware.assetmanagement.entities;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
public class AssetServiceRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "employee-sequence")
 	@SequenceGenerator(name = "employee-sequence", sequenceName = "employee_sequence", initialValue = 401)
	@Column(name = "ServiceRequestID")
	private int serviceRequestId;

	@Column(name = "IssueType")
    private String issueType;
	
	@Column(name = "DateRequested")
    private LocalDate dateRequested;
	
	@Pattern(regexp = "^[A-Z][a-zA-Z]*$", message = "Name must contain only alphabetic characters")
	@Column(name = "Status")
    private String status;

	 @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(name = "AssetID")
	    @NotNull
	    private Asset asset;
	    
	 @ManyToOne(fetch = FetchType.EAGER)
	    @JoinColumn(name = "EmployeeID")
		@NotNull
	    private Employee employee;

	public int getServiceRequestId() {
		return serviceRequestId;
	}

	public void setServiceRequestId(int serviceRequestId) {
		this.serviceRequestId = serviceRequestId;
	}

	public String getIssueType() {
		return issueType;
	}

	public void setIssueType(String issueType) {
		this.issueType = issueType;
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

	public AssetServiceRequest(int serviceRequestId, String issueType, LocalDate dateRequested,
			@Pattern(regexp = "^[A-Z][a-zA-Z]*$", message = "Name must contain only alphabetic characters") String status,
			Asset asset, Employee employee) {
		super();
		this.serviceRequestId = serviceRequestId;
		this.issueType = issueType;
		this.dateRequested = dateRequested;
		this.status = status;
		this.asset = asset;
		this.employee = employee;
	}

	public AssetServiceRequest() {
		super();
	}
 
	

	
}
