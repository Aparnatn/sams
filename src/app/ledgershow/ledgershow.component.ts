import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { LedgerRequest } from '../user/login.interfaces';
import { Router, Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ledgershow',
  templateUrl: './ledgershow.component.html',
  styleUrls: ['./ledgershow.component.scss']
})
export class LedgershowComponent implements OnInit {
  id:number;
  sub:any;
  constructor( private router: Router,private userservice: UserService,) {
  }
  formGroup: LedgerRequest;

  ngOnInit(): void {
    this.sub = this.router.routerState.root.queryParams.subscribe(params => {
      this.id = params["id"];
      this.userservice.getLedger(this.id).subscribe((data) => {
        this.userservice.ledgers
      });
    })
  }

  

}
