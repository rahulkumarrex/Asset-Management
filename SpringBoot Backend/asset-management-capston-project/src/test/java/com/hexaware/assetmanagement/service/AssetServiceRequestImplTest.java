package com.hexaware.assetmanagement.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.LocalDate;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.hexaware.assetmanagement.dto.AssetServiceRequestDTO;
import com.hexaware.assetmanagement.entities.Asset;
import com.hexaware.assetmanagement.entities.AssetServiceRequest;
import com.hexaware.assetmanagement.entities.Employee;
import com.hexaware.assetmanagement.exception.AssetNotFoundException;
import com.hexaware.assetmanagement.exception.AssetServiceRequestNotFoundException;
import com.hexaware.assetmanagement.exception.EmployeeNotFoundException;
import com.hexaware.assetmanagement.repository.AssetRepository;
import com.hexaware.assetmanagement.repository.AssetServiceRequestRepository;
import com.hexaware.assetmanagement.repository.EmployeeRepository;

@SpringBootTest
class AssetServiceRequestImplTest {
	
	
	@Autowired
    private AssetServiceRequestRepository repo;
	 
	@Autowired
	private IAssetServiceRequestService service;
	
    @Autowired
    private AssetRepository assetRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@Test
	void testDeleteServiceRequestById() throws AssetServiceRequestNotFoundException {
		int requestId = 1;
        String result = service.deleteServiceRequestById(requestId);
        assertNotNull(result);
        assertEquals("Record Deleted", result);
	}

	@Test
	void testDisplayAllServiceRequest() {
		List<AssetServiceRequest> serviceRequests = service.displayAllServiceRequest();
        assertNotNull(serviceRequests);
	}

	@Test
	void testAddServiceRequest() throws AssetNotFoundException, EmployeeNotFoundException {
		Asset asset = new Asset();
        asset.setAssetId(1);
        assetRepository.save(asset);

        Employee employee = new Employee();
        employee.setEmployeeId(1);
        employeeRepository.save(employee);
        
        AssetServiceRequestDTO requestDTO = new AssetServiceRequestDTO();
        requestDTO.setServiceRequestId(301);
        requestDTO.setIssueType("Maintenance");
        
        AssetServiceRequest addedRequest = service.addServiceRequest(requestDTO, asset.getAssetId(), employee.getEmployeeId(),"Malfunction");

        AssetServiceRequest savedRequest = repo.findById(addedRequest.getServiceRequestId()).orElse(null);

        assertEquals(requestDTO.getServiceRequestId(), savedRequest.getServiceRequestId());
        assertEquals(requestDTO.getIssueType(), savedRequest.getIssueType());
        assertEquals(LocalDate.now(), savedRequest.getDateRequested());
        assertEquals("Pending", savedRequest.getStatus());
        assertEquals(asset, savedRequest.getAsset());
        assertEquals(employee, savedRequest.getEmployee());
	}

	@Test
	void testDisplayRequestById() throws AssetServiceRequestNotFoundException {
		
		
		int serviceRequestId = 301;
		AssetServiceRequest assetServiceRequest = service.displayRequestById(serviceRequestId);
		assertNotNull(assetServiceRequest);
		assertEquals(serviceRequestId, assetServiceRequest.getServiceRequestId());
	}

}