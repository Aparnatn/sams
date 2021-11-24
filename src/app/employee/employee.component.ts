import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { EmployeeResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm = this.formBuilder.group({
    emp_name:"",
    nationality:"",
    birth_date:"",
    joining_date:"",
    designation:"",
    department:"",
    salary_categ:"",
    passport_no:"",
    expir:"",
    id_no:"",
    id_expir:"",

    basic:"",
    housing:"",
    transportation:"",
    food:"",
    mobile:"",
    other:"",
    netpay:"",



  });
  Employees:EmployeeResponse[]=[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {
    this.loadEmployees();
  }
  private loadEmployees() {
    this.service.getEmployees().subscribe((data: EmployeeResponse[]) => {
      this.Employees = data;
    })
  }
  delete(event:number) {
    if(confirm("Are you sure to delete this employee ?")) {
      this.service.employeedelete(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadEmployees();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );
    }
    return false
  }
  onSubmit1(): void {

    this.service.employee(this.employeeForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}
