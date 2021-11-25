import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../user/login.interfaces';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  id: number;

  itemeditForm = this.formBuilder.group({
    id:"",
    item_name:"",
    item_details1:"",
    item_barcode:"",
    item_category:"",
    item_unit_prim:"",
    item_unit_sec:"",
    open_balance:"",
    buying_price:"",
    sell_price:"",
    created_at:"",

  });

  constructor(
    private http:HttpClient,
    private userservice: UserService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private service:UserService,
  ) { }

  ngOnInit(): void {
    this.route.params
            .subscribe(
                params => {
                    this.id = params.id;
                    this.fetchItem();
                },
                error => {
                    console.log(`Error on person view`, error);
                },
            );
  }

  private fetchItem() {
   this.service.getitem(this.id).subscribe((item:Item) => {
     this.itemeditForm.setValue({
      id: item.id,
      item_name:item.item_name,
      item_details1:item.item_details1,
      item_barcode:item. item_barcode,
      item_category:item. item_category,
      item_unit_prim:item.item_unit_prim,
      item_unit_sec:item.item_unit_sec,
      open_balance:item.open_balance,
      buying_price:item.buying_price,
      sell_price:item.sell_price,

created_at:item.created_at,
     });
   })
  }

  onSubmit1(): void {

    this.service.itemedit(this.itemeditForm.value,this.id).subscribe((data,)=>{
      console.log(data);});
  }
}

