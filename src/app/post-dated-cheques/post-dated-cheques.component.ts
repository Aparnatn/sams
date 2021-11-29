import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-dated-cheques',
  templateUrl: './post-dated-cheques.component.html',
  styleUrls: ['./post-dated-cheques.component.scss']
})
export class PostDatedChequesComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  back() {
    this.router.navigate(['/financial']);
  }


}
