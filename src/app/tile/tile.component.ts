import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FyiService } from '../fyi/fyi.service';
import { Router } from '@angular/router';


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
  constructor(private fyi: FyiService, private router: Router){}
  openContent(data: any){
    this.fyi.viewData = data;
    this.router.navigateByUrl("/view");
  }
}
