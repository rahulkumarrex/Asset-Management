package com.hexaware.assetmanagement.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.assetmanagement.dto.AssetAuditDTO;

import com.hexaware.assetmanagement.entities.AssetAudit;
import com.hexaware.assetmanagement.entities.AssetServiceRequest;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.service.IAssetAuditService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@CrossOrigin("http://localhost:4200")

@RestController
@RequestMapping("/assetaudit")
public class AssetAuditController {

	@Autowired
	IAssetAuditService service;

	private Logger logger = LoggerFactory.getLogger(AssetAuditController.class);

	@PostMapping("/addNewAssetAudit/{employeeId}/{assetId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public AssetAudit addingAssetAudit(@PathVariable int assetId,@PathVariable int employeeId,@RequestBody AssetAuditDTO assetAuditDTO) throws InvalidEntryException {
        logger.info("Adding new asset audit with employeeId: {}, assetId: {}, status: {}", employeeId, assetId);
		return service.addingAssetAudit(  assetId,employeeId,assetAuditDTO);
	}
	
	@GetMapping("/displayAllAudits")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public List<AssetAudit> displayAllAssetAudit(){
        logger.info("Displaying all asset audits");
		return service.displayAllAssetAudit();
	}
	
	@DeleteMapping("/deleteAudit/{assetAuditId}")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public String removeAuditRequest(@PathVariable int assetAuditId) {
		return service.removeAuditRequest(assetAuditId);
	}
	
	
	@PutMapping("/updateStatus/{status}/{auditId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public void updateStatus(@PathVariable String status, @PathVariable int auditId) throws AssetNotFoundException, InvalidEntryException{ 
		service.updateStatus(status, auditId);
		logger.info("Update done");
	}
	
	@GetMapping("/displayEmployeeInfo/{employeeId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
    public List<AssetAudit> ViewAssetsOwned(@PathVariable  int employeeId) {
    	logger.info("List of user that posses assets");
		return service.ViewAssetsOwned(employeeId);
	}
	
	
}
