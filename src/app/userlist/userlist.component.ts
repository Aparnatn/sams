import { Component, OnInit } from '@angular/core';
import { RegisterRequest, RegisterResponse } from '../user/login.interfaces';
import { Register, UserService } from '../user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  users: Register[]

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data: Register[]) => {
      this.users = data;
    });
  }



}
