package com.hexaware.assetmanagement.service;

import java.util.List;


import com.hexaware.assetmanagement.dto.AssetServiceRequestDTO;

import com.hexaware.assetmanagement.entities.AssetServiceRequest;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.AssetServiceRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

public interface IAssetServiceRequestService {


	public List<AssetServiceRequest> displayAllServiceRequest();

	public String deleteServiceRequestById(int serviceRequestId) throws AssetServiceRequestNotFoundException;
	
	public AssetServiceRequest displayRequestById(int requestId) throws AssetServiceRequestNotFoundException;


	AssetServiceRequest addServiceRequest(AssetServiceRequestDTO assetserviceDTO, int assetId, int employeeId, String issueType)
			throws AssetNotFoundException, EmployeeNotFoundException;
	
	  public AssetServiceRequest updateAssetRequestStatus( String status , int requestId) throws InvalidEntryException, AssetRequestNotFoundException;
	  
	  public List<AssetServiceRequest> ViewAssetsOwned(int employeeId);
	  
		public List<AssetServiceRequest> ViewByAssets(int assetId);
		
}
