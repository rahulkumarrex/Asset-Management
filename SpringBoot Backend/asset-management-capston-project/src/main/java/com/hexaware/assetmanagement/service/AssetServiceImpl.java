package com.hexaware.assetmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.assetmanagement.dto.AssetDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.repository.AssetRepository;

@Service
public class AssetServiceImpl implements IAssetService {

	@Autowired
	AssetRepository repo;

	@Override
	public Asset addNewAsset(AssetDTO assetDTO) {

		Asset asset = new Asset();

		asset.setAssetCategory(assetDTO.getAssetCategory());
		asset.setAssetId(assetDTO.getAssetId());
		asset.setAssetModel(assetDTO.getAssetModel());
		asset.setAssetName(assetDTO.getAssetName());
		asset.setAssetValue(assetDTO.getAssetValue());
		asset.setExpiryDate(assetDTO.getExpiryDate());
		asset.setManufacturingDate(assetDTO.getManufacturingDate());
		asset.setStatus(assetDTO.getStatus());

		return repo.save(asset);

	}
	

	@Override
	public List<Asset> diplayAllAssets() {
		return repo.findAll();
	}

	@Override
	public Asset updateAsset(AssetDTO assetDTO) throws AssetNotFoundException, InvalidEntryException {

		Asset asset = repo.findById(assetDTO.getAssetId()).orElse(null);

		if (asset != null) {

			Asset updateAsset = new Asset();

			updateAsset.setAssetCategory(assetDTO.getAssetCategory());
			updateAsset.setAssetId(assetDTO.getAssetId());
			updateAsset.setAssetModel(assetDTO.getAssetModel());
			updateAsset.setAssetName(assetDTO.getAssetName());
			updateAsset.setAssetValue(assetDTO.getAssetValue());
			updateAsset.setExpiryDate(assetDTO.getExpiryDate());
			updateAsset.setManufacturingDate(assetDTO.getManufacturingDate());
			
			if(isValidStatus(assetDTO.getStatus())) {
				updateAsset.setStatus(assetDTO.getStatus());
			}else throw new InvalidEntryException("Status: "+assetDTO.getStatus()+"is invalid enter('Available' or 'In Use')");
			

			return repo.save(updateAsset);
		}

		else
			throw new AssetNotFoundException("Invalid data to update");

	}
	
	public boolean isValidStatus(String status) {
		return ("Available".equals(status) || "In Use".equals(status));
	}

	@Override
	public String deleteAssetById(int assetId) throws AssetNotFoundException {
		Asset asset = repo.findById(assetId).orElse(null);

		if (asset != null) {
			repo.deleteById(assetId);

			return "Record Deleted";
		}

		else
			throw new AssetNotFoundException("Asset with ID: " + assetId + " not found!!");
	}

	@Override
	public Asset displayAssetById(int assetId) throws AssetNotFoundException {
		Asset asset = repo.findById(assetId).orElse(null);

		if (asset != null) {
			return repo.findById(assetId).orElse(null);
		} else
			throw new AssetNotFoundException("Asset with ID: " + assetId + " not found!!");
	}

	@Override
	public List<Asset> displayAssetByCategory(String category) throws InvalidEntryException {
		List<Asset> assets = repo.displayAssetByCategory(category);

		if (!assets.isEmpty()) {
			return repo.displayAssetByCategory(category);
		} else
			throw new InvalidEntryException("Asset category: " + category + " doesn't exist!!");
	}

	@Override
	public List<Asset> displayAssetByName(String name) throws InvalidEntryException {
		List<Asset> assets = repo.displayAssetByName(name);
		if (!assets.isEmpty()) {
			return repo.displayAssetByName(name);
		}
		throw new InvalidEntryException("Asset Name: " +name+ " doesn't exist!!");
	}


	@Override
	public List<Asset> displayAvailableAssets() throws AssetNotFoundException {
		List<Asset> assetList = repo.displayAvailableAssets();
		if(assetList!=null) {
			return assetList;
		}
		else throw new AssetNotFoundException("No Asset Available!!");
		

	}


	@Override
	public void updateStatus(String status, int id) throws AssetNotFoundException {
		
		Optional<Asset> asset = repo.findById(id);
		
		if(asset!=null) {
			 repo.updateStatus(status, id);
		}
		else throw new AssetNotFoundException("No Asset");
	}

}
