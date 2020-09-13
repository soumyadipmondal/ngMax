import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('routing') route = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(route){
    this.route.emit(route);
  }

}
