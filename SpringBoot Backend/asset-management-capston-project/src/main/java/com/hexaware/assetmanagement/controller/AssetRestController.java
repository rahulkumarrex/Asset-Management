package com.hexaware.assetmanagement.controller;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.assetmanagement.dto.AssetDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.service.IAssetService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/asset")

public class AssetRestController {

	@Autowired
	IAssetService service;
	private static final Logger logger = LoggerFactory.getLogger(AssetRestController.class);

	@PostMapping("/addNewAsset")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public Asset addNewAsset(@RequestBody AssetDTO assetDTO) {
		logger.info("Adding new asset: {}", assetDTO);
		return service.addNewAsset(assetDTO);

	}

	@GetMapping("/displayAllAssets")
	@PreAuthorize("hasAnyAuthority('Admin','User')") // hasAnyAutority for multiple authorities.
	public List<Asset> diplayAllAssets() {
		logger.info("Displaying all assets");

		return service.diplayAllAssets();
	}

	@PutMapping("/updateAsset")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public Asset updateAsset(@RequestBody AssetDTO assetDTO) throws AssetNotFoundException, InvalidEntryException {
		logger.info("Updating asset with ID: {}", assetDTO.getAssetId());

		return service.updateAsset(assetDTO);
	}

	@DeleteMapping("/deleteById/{assetId}")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public void deleteAssetById(@PathVariable int assetId) throws AssetNotFoundException {
		logger.info("Deleting asset with ID: {}", assetId);

		 service.deleteAssetById(assetId);
	}

	@GetMapping("/displayAssetById/{assetId}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public Asset displayAssetById(@PathVariable int assetId) throws AssetNotFoundException {
        logger.info("Displaying asset with ID: {}", assetId);
		return service.displayAssetById(assetId);
	}

	@GetMapping("/displayAssetByCategory/{category}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public List<Asset> displayAssetByCategory(@PathVariable String category) throws InvalidEntryException {
        logger.info("Displaying assets by category: {}", category);

		return service.displayAssetByCategory(category);

	}

	@GetMapping("/displayByName/{name}")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public List<Asset> displayAssetByName(@PathVariable String name) throws InvalidEntryException {
        logger.info("Displaying assets by name: {}", name);
		return service.displayAssetByName(name);

	}
	
	@GetMapping("/displayAvailableAssets")
	@PreAuthorize("hasAnyAuthority('Admin','User')")
	public List<Asset> displayAvailableAssets() throws AssetNotFoundException{
		return service.displayAvailableAssets();
	}
	
	@PutMapping("/updateStatus/{status}/{id}")
	@PreAuthorize("hasAnyAuthority('Admin')")
	public void updateStatus(@PathVariable String status, @PathVariable int id) throws AssetNotFoundException{ 
		service.updateStatus(status, id);
		logger.info("Update done");
	}
	
	
}
