import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injector } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {


  registerForm!: FormGroup;

  submitted = false;
  private employeeService: EmployeeService;
 
constructor(
  private confirmService: NgConfirmService,
  private formBuilder: FormBuilder,
  private injector: Injector){
    this.employeeService = this.injector.get(EmployeeService);
  
  }

    
ngOnInit() {

        this.registerForm = this.formBuilder.group({

      name:['',[Validators.required , Validators.minLength(5)] ],
        email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      
      gender:['',[Validators.required,Validators.minLength(3)] ],
      contact:['',[Validators.required , Validators.minLength(5)] ],
      address:['',[Validators.required , Validators.minLength(5)] ]

        });

}


// f is a getter function which returns form controls 

get f(){

    return this.registerForm.controls;

}

  onSubmit(){

      this.submitted = true;

    if(this.registerForm.invalid){

        return;

    }
   else{
    alert('Form submission successful ');
    console.log(this.f['name'].value);

   }

  }

  insertEmployee(){

    const data: Employee = {
      employeeName: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      gender: this.registerForm.value.gender,
      contact: this.registerForm.value.contact,
      address: this.registerForm.value.address,
      employeeId: 0,
      role: ''
    };
    
    this.employeeService.insert(data)
    .subscribe(
      (emp)=>{console.log('Added Employee is: '+emp);}
      );
}


onFormSubmit() {
  this.onSubmit();
  this.insertEmployee();
}

}
