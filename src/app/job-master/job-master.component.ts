import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jobMasterdataResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-job-master',
  templateUrl: './job-master.component.html',
  styleUrls: ['./job-master.component.scss']
})
export class JobMasterComponent implements OnInit {
  jobmasterdataForm = this.formBuilder.group({
    date:['',Validators.required],
    report_date:['',Validators.required],
   });

   jobmaster: jobMasterdataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    
  }
  onSubmit(): void {

    this.service.job_masterD(this.jobmasterdataForm.value).subscribe((pcash) => {
      this.jobmaster = pcash;

      
    });
  }
  onSubmit2(): void {

    // this.router.navigate(['/grand-hyper']);
  }
  
 
 back() {
   this.router.navigate(['/itemjobbuttons']);
 }

}
