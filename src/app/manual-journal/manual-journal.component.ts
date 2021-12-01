import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-manual-journal',
  templateUrl: './manual-journal.component.html',
  styleUrls: ['./manual-journal.component.scss']
})
export class ManualJournalComponent implements OnInit {
  ManualJournalForm = this.formBuilder.group({
    debitledg1: ['',],
    debitledg2: ['',],
    creditledg1: ['',],
    creditledg2: ['',],
    debitamnt1: ['',],
    debitamnt2: ['',],
    creditamnt1: ['',],
    creditamnt2: ['',],
    debtotal: ['',Validators.required],
    cretotal: ['',Validators.required],
   
  
  });
  

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: SalesService,
    // private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.service.manualjournal(this.ManualJournalForm.value,).subscribe((data,)=>{
     console.log(data);});
     this.router.navigate(['/grand-hyper']);
 }
}
