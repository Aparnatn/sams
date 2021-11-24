import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, UserService } from '../user/user.service';

@Component({
  selector: 'app-companydelete',
  templateUrl: './companydelete.component.html',
  styleUrls: ['./companydelete.component.scss']
})
export class CompanydeleteComponent implements OnInit {

  id: any;
  sub: any;
  item:Company;
  retrieveData: any;

  constructor(private route:
    ActivatedRoute, private userservice: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.sub = this.userservice.getCompany(this.id).subscribe((company) => {
        this.item = company
      });
  });
  }
  delete(id) {
    this.userservice.companydelete(id).subscribe(result => {
      console.log(result);
      this.retrieveData = this.retrieveData.filter((elem) => {
          return elem.id !== id;
      });
    }, error => console.log('There was an error: ', error));
}

}
