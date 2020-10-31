import { Component, 
         EventEmitter, 
         Input, 
         OnInit, 
         Output } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() message: string
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClose = ()=>{
    this.close.emit();
  }
}
