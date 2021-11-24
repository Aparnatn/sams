import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  sub: any;
  id: any;


  constructor(private router: Router,private userservice: UserService) { }

  ngOnInit(): void {
    this.sub = this.router.routerState.root.queryParams.subscribe(params => {
      this.id = params["id"];
      this.userservice.getLedger(this.id).subscribe((data) => {
        this.userservice.ledgers
      });
    })
  }

}
