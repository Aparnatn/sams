import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { ItemResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  itemForm = this.formBuilder.group({
    item_name:['',Validators.required],
    item_details1:['',Validators.required],
    item_barcode:['',Validators.required],
    item_category:['',Validators.required],
    item_unit_prim:['',Validators.required],
    item_unit_sec:['',Validators.required],
    open_balance:['',Validators.required],
    buying_price:['',Validators.required],
    sell_price:['',Validators.required],
   created_at:['',Validators.required],


  });
 Items:ItemResponse[]=[];
  constructor(private http:HttpClient,private router:Router,private formBuilder: FormBuilder,private service:UserService,) { }

  ngOnInit(): void {
    this.loadItems();
  }
  private loadItems() {
    this.service.getItems().subscribe((data: ItemResponse[]) => {
      this.Items = data;
    })
  }
  onSubmit1(): void {

    this.service.item(this.itemForm.value,).subscribe((data,)=>{
      console.log(data);});
      this.router.navigate(['/grand-hyper']);
  }
  delete(event:number) {
    if(confirm("Are you sure to delete this item ?")) {
      this.service.itemdelete(event).subscribe(
        () => {
          alert('Deleted successfully');
          this.loadItems();
        },
        () => {
          alert('Somethin went wrong!! Please try again later.');
        }
      );
    }
    return false
  }
}

