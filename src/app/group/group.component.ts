import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

 groupForm = this.formBuilder.group({
    group_name: ['',Validators.required],
    category:['',Validators.required],



  });
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {

  }
  onSubmit1(): void {

    this.service.group(this.groupForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
}

