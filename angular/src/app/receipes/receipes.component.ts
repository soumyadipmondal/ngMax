import { Component, OnInit, Input } from '@angular/core';
import { ReceipeModel } from './receipes.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss']
})
export class ReceipesComponent implements OnInit {
  receipeDetail: ReceipeModel;
  constructor() { }

  ngOnInit(): void {
  }

  onDetailReceipt(receipedata){
    console.log(receipedata);
    this.receipeDetail = receipedata;
  }

}
