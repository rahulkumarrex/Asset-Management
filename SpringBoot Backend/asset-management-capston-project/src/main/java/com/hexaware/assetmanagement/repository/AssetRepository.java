package com.hexaware.assetmanagement.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.entities.AssetRequest;

import jakarta.transaction.Transactional;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Integer>{
	
	@Query("SELECT e FROM Asset e WHERE e.assetCategory LIKE :category%")
	public List<Asset> displayAssetByCategory(String category);
	
	
	@Query("Select e from Asset e Where e.assetName LIKE :name%")
	public List<Asset> displayAssetByName(String name);

	@Query("Select a from Asset a Where a.status = 'Available'")
	public List<Asset> displayAvailableAssets();
	
	@Transactional
	@Modifying
	@Query("UPDATE Asset e SET e.status = ?1 WHERE e.assetId = ?2")
	public void updateStatus(String assetStatus, int assetId);

	
	
}
