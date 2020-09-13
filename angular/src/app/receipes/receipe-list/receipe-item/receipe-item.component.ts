import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReceipeModel } from '../../receipes.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipeEl:ReceipeModel;
  @Output() sendSelReceipe = new EventEmitter<ReceipeModel>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelcetReceipe(selctedReceipe){
    console.log(selctedReceipe)
    this.sendSelReceipe.emit(selctedReceipe)
  }

}
