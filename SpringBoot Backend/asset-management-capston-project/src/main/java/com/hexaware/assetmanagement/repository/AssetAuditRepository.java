package com.hexaware.assetmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.assetmanagement.entities.AssetAudit;
import com.hexaware.assetmanagement.entities.AssetRequest;

import jakarta.transaction.Transactional;

@Repository
public interface AssetAuditRepository extends JpaRepository<AssetAudit, Integer>{
	
	@Transactional
	@Modifying
	@Query("UPDATE AssetAudit e SET e.status = ?1 WHERE e.assetAuditId = ?2")
	public void updateStatus(String status, int auditId);
	
	@Query("select ar from AssetAudit ar where ar.employee.employeeId = ?1 ")
	public List<AssetAudit> ViewAssetsOwned(int employeeId);
	

}
