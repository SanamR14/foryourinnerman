import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sendData(text: string) {
    this.messageEvent.emit(text);
  }
 
  }
