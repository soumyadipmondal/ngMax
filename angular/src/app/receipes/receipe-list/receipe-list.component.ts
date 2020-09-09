import { Component, OnInit } from '@angular/core';

import { ReceipeModel } from '../receipes.model'

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss']
})
export class ReceipeListComponent implements OnInit {
  receipeslist: ReceipeModel[] = [
    new ReceipeModel('The taste Receipe', 'I love to taste this', '../../../assets/images/receipe1.jpg'),
    new ReceipeModel('The Burger Receipe', 'I love to taste this Burger', '../../../assets/images/receipe1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.receipeslist);
  }

}
