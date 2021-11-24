import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { ActivatedRoute } from '@angular/router';
import { Ledger } from '../user/login.interfaces';

@Component({
  selector: 'app-ledgeredit',
  templateUrl: './ledgeredit.component.html',
  styleUrls: ['./ledgeredit.component.scss']
})
export class LedgereditComponent implements OnInit {
  // ledger id from route param
  id: number;

  LedgereditForm = this.formBuilder.group({
    id: '',
    ledger_name:"",
    group_name :"",
    category:"",
    opening_bal:"",
    date:"",
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
                    this.fetchLedger();
                },
                error => {
                    console.log(`Error on person view`, error);
                },
            );
  }

  private fetchLedger() {
   this.service.getLedger(this.id).subscribe((ledger: Ledger) => {
     this.LedgereditForm.setValue({
       id: ledger.id,
      ledger_name: ledger.ledger_name,
      group_name :ledger.group_name,
      category:ledger.category,
      opening_bal:ledger.opening_bal,
      date:ledger.date,
     });
   })
  }

  onSubmit1(): void {

    this.service.ledgeredit(this.LedgereditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}
