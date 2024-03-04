package com.hexaware.assetmanagement.dto;

import java.time.LocalDate;

import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.entities.Employee;


import jakarta.persistence.Id;

public class AssetAuditDTO {

	@Id
	private int assetAuditId;
	private LocalDate dateAudited = LocalDate.now();
	private String status = "Pending";
    private Asset asset;  
    private Employee employee;	

	public int getAssetAuditId() {
		return assetAuditId;
	}
	public void setAssetAuditId(int assetAuditId) {
		this.assetAuditId = assetAuditId;
	}
	public LocalDate getDateAudited() {
		return dateAudited;
	}
	public void setDateAudited(LocalDate dateAudited) {
		this.dateAudited = dateAudited;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public AssetAuditDTO(int assetAuditId, LocalDate dateAudited, Asset asset, Employee employee, String status) {
		super();
		this.assetAuditId = assetAuditId;
		this.dateAudited = dateAudited;
		this.asset = asset;
		this.employee = employee;
		this.status = status;
	}
	public AssetAuditDTO() {
		super();
	}
	
	
	
}
