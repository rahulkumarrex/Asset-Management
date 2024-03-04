import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent {
  updateEmployeeForm!: FormGroup
  submitted = false; 

  employeeId:number= this.activatedRoute.snapshot.params["employeeId"]

  constructor(private employeeService: EmployeeService,
     private activatedRoute: ActivatedRoute,
     private formbuilder: FormBuilder,
     private router:Router,
     private confirmService: NgConfirmService){}

  ngOnInit(){
    this.employeeId = +this.activatedRoute.snapshot.params['employeeId'];
    this.updateEmployeeForm = this.formbuilder.group({
      employeeId: [this.employeeId],
      employeeName:['',[Validators.required , Validators.minLength(5)] ],
        email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.minLength(10)]],
      
      gender:['',[Validators.required,Validators.minLength(3)] ],
      contact:['',[Validators.required , Validators.minLength(5)] ],
      address:['',[Validators.required , Validators.minLength(5)] ]
    })
    this.searchEmployeeById();
  }

  get f(){

    return this.updateEmployeeForm.controls;

}

  searchEmployeeById(){
    this.employeeService.searchEmployeeById(this.employeeId).subscribe((res) => {
      console.log(res);
      this.updateEmployeeForm.patchValue(res);
      
    })
  }


  updateEmployee(){

    this.confirmService.showConfirm('Do you want to update', 
    ()=>{
      this.submitted = true; 
      if (this.updateEmployeeForm.invalid) {
        return;
      }
    
      // Call the service method to update the employee
      this.employeeService.updateEmployeeDetail(this.updateEmployeeForm.value).subscribe((res)=>{
        console.log(res);
        alert('Form Update successful ');
        console.log(this.f['employeeName'].value);
        this.router.navigate(['./employeelist']);  
      });
        
    },
    ()=>{
      
    }
    
    
    )


      
    }
  }


