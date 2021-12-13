import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  onSubmit(): void {

    this.router.navigate(['/manual-journal']);
  }
  onSubmit1(): void {

    // this.router.navigate([]);
  }
  back() {
    this.router.navigate(['/grand-hyper']);
  }

}
