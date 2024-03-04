package com.hexaware.assetmanagement.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexaware.assetmanagement.dto.AssetDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;

@SpringBootTest
class AssetServiceImplTest {

	@Autowired
	private IAssetService service;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testAddNewAsset() {
		   
        AssetDTO assetDTO = new AssetDTO();
        assetDTO.setAssetId(101);
        assetDTO.setAssetName("Laptop");
        assetDTO.setAssetCategory("Electronics");
        assetDTO.setAssetModel("Dell Inspiron");
        assetDTO.setManufacturingDate(LocalDate.of(2023, 1, 1));
        assetDTO.setExpiryDate(LocalDate.of(2026, 1, 1));
        assetDTO.setAssetValue(1000.00);

        assetDTO.setStatus("Available");

        Asset addedAsset = service.addNewAsset(assetDTO);
        assertNotNull(addedAsset);
        assertEquals(assetDTO.getAssetName(), addedAsset.getAssetName());
	}

	@Test
	void testDiplayAllAssets() throws InvalidEntryException {
		String name = "Laptop";

        List<Asset> assets = service.displayAssetByName(name);
        assertNotNull(assets);
        assertFalse(assets.isEmpty());
	}

	@Test
	void testUpdateAsset()throws AssetNotFoundException, InvalidEntryException {
		AssetDTO assetDTO = new AssetDTO();
        assetDTO.setAssetId(104);
        assetDTO.setAssetName("Updated Laptop");
        assetDTO.setAssetCategory("Electronics");
        assetDTO.setAssetModel("Dell Inspiron");
        assetDTO.setManufacturingDate(LocalDate.of(2023, 1, 1));
        assetDTO.setExpiryDate(LocalDate.of(2026, 1, 1));
        assetDTO.setAssetValue(1000.00);
        assetDTO.setStatus("Available");

        Asset updatedAsset = service.updateAsset(assetDTO);
        assertNotNull(updatedAsset);
        assertEquals(assetDTO.getAssetName(), updatedAsset.getAssetName());
	}

	@Test
	void testDeleteAssetById() throws AssetNotFoundException {
		int assetId = 101;

        String result = service.deleteAssetById(assetId);
        assertNotNull(result);
        assertEquals("Record Deleted", result);
	}

	@Test
	void testDisplayAssetById() throws AssetNotFoundException {
		int assetId = 101;

        Asset asset = service.displayAssetById(assetId);
        assertNotNull(asset);
        assertEquals(assetId, asset.getAssetId());
	}

	@Test
	void testDisplayAssetByCategory() throws InvalidEntryException {
		String category = "Electronics";

        List<Asset> assets = service.displayAssetByCategory(category);
        assertNotNull(assets);
        assertFalse(assets.isEmpty());
	}

	@Test
	void testDisplayAssetByName() throws InvalidEntryException {
		String name = "Laptop";

        List<Asset> assets = service.displayAssetByName(name);
        assertNotNull(assets);
        assertFalse(assets.isEmpty());
	}

}