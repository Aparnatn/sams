import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    date:"",
    report_date:"",
   });

   jobmaster: jobMasterdataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.jobmasterDF({}).subscribe((data) => {
      this.jobmaster = data;
      console.log(data);
    })
  }
  onSubmit(): void {

    this.service.jobmasterDF(this.jobmasterdataForm.value,).subscribe((data,)=>{
      console.log(data);});
    // this.router.navigate(['/reports']);
  }
  onSubmit2(): void {

    // this.router.navigate(['/grand-hyper']);
  }
}
