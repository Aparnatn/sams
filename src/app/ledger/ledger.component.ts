import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CustomerResponse, GroupResponse, LedgerResponse, SupplierResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss']
})
export class LedgerComponent implements OnInit {
  LedgerForm = this.formBuilder.group({
    ledger_name:['',Validators.required],
    group_name :"",
    category:"",
    opening_bal:"",
date:"",
  });
 ledgers:LedgerResponse[]=[];
 group:GroupResponse[]=[];
 customers:CustomerResponse[]=[];
 suppliers:SupplierResponse[]=[];

  constructor(private http:HttpClient,private userservice: UserService,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {
    this.loadLedger();
    this.loadGroups();
    this.loadCustomers();
    this.loadSuppliers();

  }



  loadCustomers() {
    this.userservice.getCustomer().subscribe((data: CustomerResponse[]) => {
      this.customers = data;
    })
  }
  loadSuppliers() {
    this.userservice.getSuppliers().subscribe((data: SupplierResponse[]) => {
      this.suppliers = data;
    })
  }

  private loadLedger() {
    this.service.getLedgers().subscribe((data: LedgerResponse[]) => {
      this.ledgers = data;
    })
  }
    private loadGroups() {
      this.service.getgroups().subscribe((data: GroupResponse[]) => {
        this.group = data;
      })
  }
  delete(event:number) {
    if(confirm("Are you sure to delete this ledger ?")) {
      this.service.ledgerdelete(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadLedger();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );
    }
    return false
  }
  onSubmit1(): void {

     this.service.ledgercreate(this.LedgerForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  back() {
    this.router.navigate(['/register']);
  }
}
