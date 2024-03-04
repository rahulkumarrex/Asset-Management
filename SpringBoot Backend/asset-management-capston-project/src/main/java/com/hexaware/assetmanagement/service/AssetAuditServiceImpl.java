package com.hexaware.assetmanagement.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.assetmanagement.dto.AssetAuditDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.entities.AssetAudit;

import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.repository.AssetAuditRepository;
import com.hexaware.assetmanagement.repository.AssetRepository;
import com.hexaware.assetmanagement.repository.AssetRequestRepository;
import com.hexaware.assetmanagement.repository.EmployeeRepository;

@Service
public class AssetAuditServiceImpl implements IAssetAuditService {

	Logger logger = LoggerFactory.getLogger(AssetAuditServiceImpl.class);

//	@Autowired
//	AssetRequestRepository requestRepo;

	@Autowired
	AssetAuditRepository repo;

	@Autowired
	EmployeeRepository employeeRepo;

	@Autowired
	AssetRepository assetRepo;

	@Override
	public List<AssetAudit> displayAllAssetAudit() {
        logger.info("Fetching all asset audits");
		return repo.findAll();
	}

	@Override
	public AssetAudit addingAssetAudit(int assetId, int employeeId ,AssetAuditDTO assetAuditDTO)  throws InvalidEntryException {
        logger.info("Adding new asset audit with details: {}", assetAuditDTO);
        AssetAudit audit = new AssetAudit();
        audit.setDateAudited(LocalDate.now());
		Employee emp = employeeRepo.findById(employeeId).orElse(null);
		Asset asset = assetRepo.findById(assetId).orElse(null);
		if (emp!=null && asset != null) {
		
		audit.setAssetAuditId(assetAuditDTO.getAssetAuditId());
		audit.setAsset(asset);
		audit.setEmployee(emp);
		audit.setStatus("Pending");
		return repo.save(audit);
		

		} else throw new InvalidEntryException("Invalid Entry");
		
		
		
	}

	@Override
	public String removeAuditRequest(int assetAuditId) {
        logger.info("Deleting asset audit details");
		 repo.deleteById(assetAuditId);
		 return "Audit deleted";
	}
	

	public boolean isValidStatus(String status) {
		if("Verified".equals(status) || "Pending".equals(status)) {
			return true;
		}
		else return false;
	}

	@Override
	public void updateStatus(String status, int auditId) throws InvalidEntryException {
		
		Optional<AssetAudit> audit = repo.findById(auditId);
		
		if(audit!=null) {
			 repo.updateStatus(status, auditId);
		}
		else throw new InvalidEntryException(status);	
		
	}

	@Override
	public List<AssetAudit> ViewAssetsOwned(int employeeId) {
		return repo.ViewAssetsOwned(employeeId);
	}

}
