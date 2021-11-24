import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LedgerMasterDataResponse } from '../reports/reports.interface';
import { ReportsService } from '../reports/reports.service';


@Component({
  selector: 'app-ledger-masterdata',
  templateUrl: './ledger-masterdata.component.html',
  styleUrls: ['./ledger-masterdata.component.scss']
})
export class LedgerMasterdataComponent implements OnInit {
  LedgerMasterDataForm = this.formBuilder.group({
    date:"",
    report_date:"",
   });
   ledger: LedgerMasterDataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    this.service.ledgermasterdF({}).subscribe((data) => {
      this.ledger = data;
      console.log(data);
    })
  }

  onSubmit(): void {

    this.service.ledgermasterdF(this.LedgerMasterDataForm.value,).subscribe((data,)=>{
      console.log(data);});
      // this.router.navigate(['/grand-hyper']);
  }
}
