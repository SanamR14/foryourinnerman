import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [MatCardModule, NgFor,NgIf],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  @Input() tileMessage: any;
  ngOnInit(){
    
  }
}
