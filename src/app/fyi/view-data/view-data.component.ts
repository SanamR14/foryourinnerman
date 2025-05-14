import { Component, ViewChild } from '@angular/core';
import { FyiService, FyiDataService } from '../fyi.service';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FyiData } from '../fyi.component';
import { FooterComponent } from '../../footer/footer.component';


@Component({
  selector: 'app-view-data',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.scss'
})
export class ViewDataComponent {
    fyi :any;
   


  constructor(private fyiService: FyiService){}

  ngOnInit() {
    this.fyi = this.fyiService.viewData;
    console.log(this.fyi);
  }
}
