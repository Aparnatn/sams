import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { JobResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  JobForm = this.formBuilder.group({
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

    this.service.job(this.JobForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}
