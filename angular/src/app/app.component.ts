import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  feature:string;
  title = 'angular';
  constructor(){}
  ngOnInit(){}

  onSelectRoute(routingdata){
    this.feature = routingdata;
  }
  
}
