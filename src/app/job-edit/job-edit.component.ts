import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job, JobResponse } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {
  id: number;
  JobeditForm = this.formBuilder.group({
    id:"",
    job_name:"",

    job_desc:"",
    // imag1:"",
    // imag2:"",
    // imag3:"",
    // imag4:"",


  });
  jobs:JobResponse[]=[];
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
                    this.fetchjobs();
                },
                error => {
                    console.log(`Error on person view`, error);
                },
            );
  }

  private fetchjobs() {
   this.service.getJobs(this.id).subscribe((job: Job) => {
     this.JobeditForm.setValue({
       id: job.id,
      job_name: job.job_name,
     job_desc :job.job_desc,

     });
   })
  }

  onSubmit1(): void {

    this.service.jobedit(this.JobeditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}
