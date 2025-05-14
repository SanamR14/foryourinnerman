import { Component, ViewChild } from '@angular/core';
import { FyiService, FyiDataService } from '../fyi.service';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-data',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.scss'
})
export class ViewDataComponent {
    fyi :any;
   


  constructor(private fyiService: FyiService, private router: Router){
    const nav = this.router.getCurrentNavigation();
    this.fyi = nav?.extras.state?.['data'];
  }

  ngOnInit() {
    // this.fyi = this.fyiService.viewData;
  }
}
