package com.hexaware.assetmanagement.dto;

import java.time.LocalDate;

import com.hexaware.assetmanagement.entities.Asset;


public class AssetDTO {

	private int assetId;

	private int assetEmployeeInfoId;
	private String assetName;
	private String assetCategory;
	private String assetModel;
	private LocalDate manufacturingDate;
	private LocalDate expiryDate;
	private double assetValue;
	private String status;
    private Asset asset;
	public AssetDTO(int assetId, String assetName, String assetCategory, String assetModel, LocalDate manufacturingDate,
			LocalDate expiryDate, double assetValue, String status, Asset asset) {
		super();
		this.assetId = assetId;
		this.assetName = assetName;
		this.assetCategory = assetCategory;
		this.assetModel = assetModel;
		this.manufacturingDate = manufacturingDate;
		this.expiryDate = expiryDate;
		this.assetValue = assetValue;
		this.status = status;
		this.asset = asset;
	}
	public Asset getAsset() {
		return asset;
	}
	public void setAsset(Asset asset) {
		this.asset = asset;
	}
	public int getAssetId() {
		return assetId;
	}
	public void setAssetId(int assetId) {
		this.assetId = assetId;
	}
	public String getAssetName() {
		return assetName;
	}
	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}
	public String getAssetCategory() {
		return assetCategory;
	}
	public void setAssetCategory(String assetCategory) {
		this.assetCategory = assetCategory;
	}
	public String getAssetModel() {
		return assetModel;
	}
	public void setAssetModel(String assetModel) {
		this.assetModel = assetModel;
	}
	public LocalDate getManufacturingDate() {
		return manufacturingDate;
	}
	public void setManufacturingDate(LocalDate manufacturingDate) {
		this.manufacturingDate = manufacturingDate;
	}
	public LocalDate getExpiryDate() {
		return expiryDate;
	}
	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}
	public double getAssetValue() {
		return assetValue;
	}
	public void setAssetValue(double assetValue) {
		this.assetValue = assetValue;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	public AssetDTO() {
		super();
	}
	
	
}
