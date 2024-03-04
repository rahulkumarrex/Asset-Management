package com.hexaware.assetmanagement.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexaware.assetmanagement.dto.AssetRequestDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.entities.AssetRequest;
import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.AssetRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.exception.InvalidEntryException;
import com.hexaware.assetmanagement.repository.AssetRepository;
import com.hexaware.assetmanagement.repository.AssetRequestRepository;
import com.hexaware.assetmanagement.repository.EmployeeRepository;

@SpringBootTest
class AssetRequestImpTest {

	@Autowired
	private IAssetRequest service;
	
	@Autowired
    private AssetRepository assetRepository;

    @Autowired
    private EmployeeRepository employeeRepository;
    
    @Autowired
    private AssetRequestRepository repo;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testAddAssets() throws AssetNotFoundException, InvalidEntryException, EmployeeNotFoundException {
		
        Employee employee = new Employee();
        employee.setEmployeeId(1);
        employeeRepository.save(employee);

        Asset asset = new Asset();
        asset.setAssetId(1);
        assetRepository.save(asset);
        
        
        AssetRequestDTO requestDTO = new AssetRequestDTO();
        requestDTO.setRequestId(101);
        requestDTO.setRequestType("Repair");
        requestDTO.setDateRequested(LocalDate.now());
        requestDTO.setStatus("Pending");

        AssetRequest addedRequest = service.addAssetsRequests(requestDTO, employee.getEmployeeId(), asset.getAssetId());

        AssetRequest savedRequest = repo.findById(addedRequest.getRequestId()).orElse(null);

        assertNotNull(savedRequest);

        assertEquals(requestDTO.getRequestId(), savedRequest.getRequestId());
        assertEquals(requestDTO.getRequestType(), savedRequest.getRequestType());
        assertEquals(requestDTO.getDateRequested(), savedRequest.getDateRequested());
        assertEquals(requestDTO.getStatus(), savedRequest.getStatus());
        assertEquals(employee, savedRequest.getEmployee());
        assertEquals(asset, savedRequest.getAsset());
	}

	@Test
	void testDeleteAssetRequest() throws AssetRequestNotFoundException {
		int requestId = 301;
        String result = service.deleteAssetRequest(requestId);
        assertEquals("Request Deleted", result);
	}

	@Test
	void testFindRequest() throws AssetRequestNotFoundException {
		  int requestId = 1;
	        AssetRequest foundAssetRequest = service.findRequest(requestId);
	        assertNotNull(foundAssetRequest);
	        assertEquals(requestId, foundAssetRequest.getRequestId());
	}

	@Test
	void testSearchAllRequests() {
		List<AssetRequest> assetRequests = service.displayAllRequest();
        assertNotNull(assetRequests);
        assertTrue(assetRequests.size() > 0);
	}

}
