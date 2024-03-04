package com.hexaware.assetmanagement.service;

import java.util.List;

import com.hexaware.assetmanagement.dto.AssetRequestDTO;
import com.hexaware.assetmanagement.entities.AssetRequest;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

public interface IAssetRequest {

	public AssetRequest addAssetsRequests(AssetRequestDTO asset, int employeeId, int assetId) throws AssetNotFoundException, InvalidEntryException, EmployeeNotFoundException;

	public String deleteAssetRequest(int requestId) throws AssetRequestNotFoundException;

	public AssetRequest findRequest(int requestId) throws AssetRequestNotFoundException;

	public AssetRequest updateRequestStatus(String status, int requestId)throws AssetRequestNotFoundException, InvalidEntryException;

	public List<AssetRequest> ViewAssetEmployeeInfo();

	List<AssetRequest> displayAllRequest();
	
	public List<AssetRequest> displayRequestById(int employeeId);

	public AssetRequest isAssetExist(int empId, int assetId);

	
	public List<AssetRequest> ViewAssetsOwned(int employeeId);
	
	public List<AssetRequest> ViewByAssets(int assetId);
	
	public void updateIssueType(String issueType, int requestId);
	
	}
