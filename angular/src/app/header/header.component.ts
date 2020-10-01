import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedItem:string='receipe';
  @Output('routing') route = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  /*onSelect(route){
    this.selectedItem = route;
    this.route.emit(route);
  }*/

}
