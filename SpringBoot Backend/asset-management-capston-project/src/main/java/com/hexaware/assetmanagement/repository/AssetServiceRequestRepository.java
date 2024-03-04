package com.hexaware.assetmanagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hexaware.assetmanagement.entities.AssetServiceRequest;

public interface AssetServiceRequestRepository extends JpaRepository<AssetServiceRequest, Integer>{
	
		@Query("select ar from AssetServiceRequest ar where ar.employee.employeeId = ?1 ")
		public List<AssetServiceRequest> ViewAssetsOwned(int employeeId);
		
	
	@Query("select ar from AssetServiceRequest ar where ar.asset.assetId = ?1 ")
	public List<AssetServiceRequest> ViewByAssets(int assetId);
	

}
