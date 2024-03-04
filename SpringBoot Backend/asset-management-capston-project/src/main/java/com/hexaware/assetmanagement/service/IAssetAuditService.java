package com.hexaware.assetmanagement.service;

import java.util.List;

import com.hexaware.assetmanagement.dto.AssetAuditDTO;
import com.hexaware.assetmanagement.entities.AssetAudit;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

public interface IAssetAuditService {

	
	public List<AssetAudit> displayAllAssetAudit();
	public AssetAudit addingAssetAudit(int assetId, int employeeId ,AssetAuditDTO assetAuditDTO) throws InvalidEntryException;
	public String removeAuditRequest(int assetAuditId);
	public List<AssetAudit> ViewAssetsOwned(int employeeId);
	public void updateStatus(String status, int auditId) throws InvalidEntryException;
}
