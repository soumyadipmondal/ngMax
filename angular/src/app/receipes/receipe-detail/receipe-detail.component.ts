import { Component, OnInit, Input } from '@angular/core';
import { ReceipeModel } from '../receipes.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipeDetail: ReceipeModel
  constructor() { }

  ngOnInit(): void {
    //console.log(this.receipeDetail);
    
  }

}
