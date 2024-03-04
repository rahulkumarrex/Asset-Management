package com.hexaware.assetmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.assetmanagement.entities.AssetRequest;

import jakarta.transaction.Transactional;



@Repository
public interface AssetRequestRepository extends JpaRepository<AssetRequest, Integer>{
	
	@Query("UPDATE AssetRequest ar SET ar.status = ?1 WHERE ar.requestId = ?2")
	public AssetRequest updateAssetRequestStatus(String status, int assetRequestId);

	@Query("select ar from AssetRequest ar where ar.status = 'Approved' ")
	public List<AssetRequest> ViewAssetEmployeeInfo();

	@Query("select ar from AssetRequest ar where ar.employee.employeeId = ?1")
	public List<AssetRequest> displayRequestById(int empId);
	
	@Query("select ar from AssetRequest ar where ar.employee.employeeId = ?1 AND ar.asset.assetId = ?2 " )
	public AssetRequest isAssetExist(int empId, int assetId);

	@Query("select ar from AssetRequest ar where ar.employee.employeeId = ?1 ")
	public List<AssetRequest> ViewAssetsOwned(int employeeId);
	
	@Query("select ar from AssetRequest ar where ar.asset.assetId = ?1 ")
	public List<AssetRequest> ViewByAssets(int assetId);
	

	@Transactional
	@Modifying
	@Query("Update AssetRequest ar Set ar.requestType= ?1 Where ar.requestId=?2")
	public void updateIssueType(String issueType, int requestId);


}
