import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  id: number;

  EmployeeditForm = this.formBuilder.group({
    id:"",
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

  constructor(
    private http:HttpClient,
    private userservice: UserService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private service:UserService,
  ) { }

  ngOnInit(): void {
    this.route.params
            .subscribe(
                params => {
                    this.id = params.id;
                    this.fetchEmployee();
                },
                error => {
                    console.log(`Error on person view`, error);
                },
            );
  }

  private fetchEmployee() {
   this.service.getemp(this.id).subscribe((employee:Employee) => {
     this.EmployeeditForm.setValue({
      id: employee.id,
      emp_name:employee.emp_name,
      nationality:employee.nationality,
      birth_date:employee.birth_date,
      joining_date:employee.joining_date,
      designation:employee.designation,
      department:employee.department,
      salary_categ:employee.salary_categ,
      passport_no:employee.passport_no,
      expir:employee.expir,
      id_no:employee.id_no,
      id_expir:employee.id_expir,

      basic:employee.basic,
      housing:employee.housing,
      transportation:employee.transportation,
      food:employee.food,
      mobile:employee.mobile,
      other:employee.other,
      netpay:employee.netpay,
     });
   })
  }

  onSubmit1(): void {

    this.service.employeeedit(this.EmployeeditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}
