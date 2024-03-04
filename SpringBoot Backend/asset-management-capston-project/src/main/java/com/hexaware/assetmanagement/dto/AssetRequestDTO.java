package com.hexaware.assetmanagement.dto;

import java.time.LocalDate;

public class AssetRequestDTO {
	
	
	    
	    private int requestId;
	    private String requestType= "New Asset";
	    private LocalDate dateRequested = LocalDate.now();
	    private String status = "Pending";
	    private int employeeId; 
	    private int assetId;
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
		public int getEmployeeId() {
			return employeeId;
		}
		public void setEmployeeId(int employeeId) {
			this.employeeId = employeeId;
		}
		public int getAssetId() {
			return assetId;
		}
		public void setAssetId(int assetId) {
			this.assetId = assetId;
		}
		public AssetRequestDTO(int requestId, String requestType, LocalDate dateRequested, String status,
				int employeeId, int assetId) {
			super();
			this.requestId = requestId;
			this.requestType = requestType;
			this.dateRequested = dateRequested;
			this.status = status;
			this.employeeId = employeeId;
			this.assetId = assetId;
		}
		public AssetRequestDTO() {
			super();
		}
	    


}
