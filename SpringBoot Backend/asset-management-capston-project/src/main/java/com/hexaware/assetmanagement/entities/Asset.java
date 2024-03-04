package com.hexaware.assetmanagement.entities;

import java.time.LocalDate;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@JsonIgnoreProperties
public class Asset {

	 @Id
		@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "asset-sequence")
	 	@SequenceGenerator(name = "asset-sequence", sequenceName = "asset-sequence", initialValue = 211)
	    @Column(name= "AssetId")
	    private int assetId;

	    @NotNull
	    @Pattern(regexp = "^[A-Z][a-zA-Z]*$")
	    @Column(name= "AssetName")
	    private String assetName;

	    @NotNull
	    @Column(name= "AssetCategory")
	    private String assetCategory;

	    @NotNull
	    @Column(name= "AssetModel")
	    private String assetModel;

	    @NotNull
	    @Column(name= "ManufacturingDate")
	    private LocalDate manufacturingDate;

	    @NotNull
	    @Column(name= "ExpiryDate")
	    private LocalDate expiryDate;

	    @NotNull
	    @Column(name= "AssetValue")
	    private double assetValue;

	    @NotNull
		@Pattern(regexp = "^[A-Z][a-zA-Z]*$", message = "Name must contain only alphabetic characters")
	    @Column(name= "Status")
	    private String status;
	    
	    @OneToMany(mappedBy = "asset" , cascade = CascadeType.ALL)
//	    @JsonBackReference
	    @JsonIgnore
	    private List<AssetServiceRequest> assetServiceRequest;
	    
	    @JsonIgnore
		@OneToMany(mappedBy = "asset" , cascade = CascadeType.ALL)
//	    @JsonBackReference
	    private List<AssetRequest> assetRequests;
	    @JsonIgnore
		@OneToMany(mappedBy = "asset", cascade = CascadeType.ALL)
//	    @JsonBackReference
		private List<AssetAudit> assetAudit;
	
	
	public Asset(int assetId, @NotNull @Pattern(regexp = "^[A-Z][a-zA-Z]*$") String assetName,
				@NotNull String assetCategory, @NotNull String assetModel, @NotNull LocalDate manufacturingDate,
				@NotNull LocalDate expiryDate, @NotNull double assetValue,
				@NotNull @Pattern(regexp = "^[A-Z][a-zA-Z]*$", message = "Name must contain only alphabetic characters") String status,
				List<AssetServiceRequest> assetServiceRequest) {
			super();
			this.assetId = assetId;
			this.assetName = assetName;
			this.assetCategory = assetCategory;
			this.assetModel = assetModel;
			this.manufacturingDate = manufacturingDate;
			this.expiryDate = expiryDate;
			this.assetValue = assetValue;
			this.status = status;
			this.assetServiceRequest = assetServiceRequest;
		}
	public List<AssetServiceRequest> getAssetServiceRequest() {
			return assetServiceRequest;
		}
		public void setAssetServiceRequest(List<AssetServiceRequest> assetServiceRequest) {
			this.assetServiceRequest = assetServiceRequest;
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

	public Asset() {
		super();
	}
	
	
	
}
