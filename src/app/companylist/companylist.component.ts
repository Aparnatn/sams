import { Component, OnInit } from '@angular/core';
import { Company, UserService } from '../user/user.service';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent implements OnInit {

  companies: Company[] = [];

  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  private loadCompanies() {
    this.service.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

  delete(event:number) {
    if(confirm("Are you sure to delete this company ?")) {
      this.service.deleteCompany(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadCompanies();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );
    }
    return false;
  }
}
