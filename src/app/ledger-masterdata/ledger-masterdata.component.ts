import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    date:['',Validators.required],
    report_date:['',Validators.required],
   });
   ledger: LedgerMasterDataResponse[];

  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:ReportsService,) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {

    this.service.ledger_masterD(this.LedgerMasterDataForm.value).subscribe((pcash) => {
      this.ledger = pcash;

      
    });
  }
  
 back() {
  this.router.navigate(['/ledgerbuttons']);
}
}
