import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-more-items',
  templateUrl: './add-more.component.html',
  styleUrls: ['./add-more.component.scss']
})
export class AddMoreComponent {
  @Input() form: FormGroup;
  @Input() index: number = 1;

  calcualtTotal() {

  }
}
