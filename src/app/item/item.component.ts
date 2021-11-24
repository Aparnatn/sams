import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user/user.service';
import { ItemResponse } from '../user/login.interfaces';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  itemForm = this.formBuilder.group({
    item_name:"",
    item_desc:"",
    item_barcode:"",
    item_category:"",
    item_unit_prim:"",
    item_unit_sec:"",
    open_balance:"",
    buying_price:"",
    sell_price:"",



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
}

