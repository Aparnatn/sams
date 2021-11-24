import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {

  JobeditForm = this.formBuilder.group({
    job_name:"",
    job_desc:"",
    // imag1:"",
    // imag2:"",
    // imag3:"",
    // imag4:"",


  });
  jobs:JobResponse[]=[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {
    this.loadJobs();
  }
  private loadJobs() {
    this.service. getJob().subscribe((data: JobResponse[]) => {
      this.jobs = data;
    })
  }
  onSubmit1(): void {

    this.service.job(this.JobeditForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}
