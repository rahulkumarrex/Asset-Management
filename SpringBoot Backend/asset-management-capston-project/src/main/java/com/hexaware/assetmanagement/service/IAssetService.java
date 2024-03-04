package com.hexaware.assetmanagement.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.assetmanagement.dto.AssetDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

public interface IAssetService {

	public Asset addNewAsset(AssetDTO assetDTO);

	public List<Asset> diplayAllAssets();

	public Asset updateAsset(AssetDTO assetDTO) throws AssetNotFoundException, InvalidEntryException;
	
	public void updateStatus(String status, int id) throws AssetNotFoundException;


	public String deleteAssetById(int assetId) throws AssetNotFoundException;

	public Asset displayAssetById(int assetId) throws AssetNotFoundException;

	public List<Asset> displayAssetByCategory(String category) throws InvalidEntryException;

	public List<Asset> displayAssetByName(String name) throws InvalidEntryException;
	
	public List<Asset> displayAvailableAssets() throws AssetNotFoundException;

}
