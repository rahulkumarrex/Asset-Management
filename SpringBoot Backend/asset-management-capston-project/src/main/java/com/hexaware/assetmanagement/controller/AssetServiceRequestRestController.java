package com.hexaware.assetmanagement.controller;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.assetmanagement.dto.AssetServiceRequestDTO;
import com.hexaware.assetmanagement.entities.AssetRequest;
import com.hexaware.assetmanagement.entities.AssetServiceRequest;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.AssetServiceRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.service.IAssetServiceRequestService;

@RestController
@RequestMapping("/assetServiceRequest")
public class AssetServiceRequestRestController {

	@Autowired
	IAssetServiceRequestService service;

	Logger logger = LoggerFactory.getLogger(AssetServiceRequest.class);


	@PostMapping("/addNewRequest/{assetId}/{employeeId}/{issueType}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public AssetServiceRequest addServiceRequest(@RequestBody AssetServiceRequestDTO assetserviceDTO,@PathVariable int assetId , @PathVariable int employeeId ,@PathVariable String issueType) throws AssetNotFoundException, EmployeeNotFoundException{
		
		logger.info(issueType);
		return service.addServiceRequest(assetserviceDTO, assetId,employeeId,issueType);
	}


	
	@GetMapping("/displayAllRequests")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public List<AssetServiceRequest> displayAllServiceRequest(){
		
		return service.displayAllServiceRequest();
	}
	
	@GetMapping("/displayById/{requestId}")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public AssetServiceRequest displayServiceRequestById(@PathVariable int requestId) throws AssetServiceRequestNotFoundException {
		return service.displayRequestById(requestId);
	}
	
    @PutMapping("/updateStatus/{status}/{requestId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
    public AssetServiceRequest updateAssetRequestStatus(@PathVariable String status ,@PathVariable int requestId) throws AssetRequestNotFoundException, InvalidEntryException {
    	logger.info("Admin is Updating Status");
    	return service.updateAssetRequestStatus(status, requestId);
    }
    
    @DeleteMapping("deleteById/{serviceRequestId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public String deleteServiceRequestById(@PathVariable int serviceRequestId) throws AssetServiceRequestNotFoundException{
        logger.info("Deleting service request with ID: {}", serviceRequestId);
		 service.deleteServiceRequestById(serviceRequestId);
		 return "Record Deleted";
	}
    
    @GetMapping("/displayEmployeeInfo/{employeeId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
    public List<AssetServiceRequest> ViewAssetsOwned(@PathVariable  int employeeId) {
    	logger.info("List of user that posses assets");
		return service.ViewAssetsOwned(employeeId);
	}
    
    @GetMapping("/displayAssetInfo/{assetId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
    public List<AssetServiceRequest> ViewAssets(@PathVariable  int assetId) {
    	logger.info("List of assets");
		return service.ViewByAssets(assetId);
	}
    
}
