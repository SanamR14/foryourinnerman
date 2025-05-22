import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FyiDataService, FyiService } from './fyi.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// export interface FyiData {
//   image: string;
//   title: string;
//   author: string;
//   innerTitle: string;
//   content: string;
// }

@Component({
  selector: 'app-fyi',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,MatCardModule,FooterComponent,NgFor],
  templateUrl: './fyi.component.html',
  styleUrl: './fyi.component.scss'
})
export class FyiComponent {

   @ViewChild(SearchComponent) search: any;
   
    
    filteredFyiData: FyiDataService[] =[];
    fyiData :FyiDataService[] = [];

    constructor(private fyiService: FyiService, private router: Router, private auth: AuthService){
    }
    
    ngOnInit() {
      this.fyiService.getData().subscribe({
        next: (data) => {
          this.fyiData = data;
          // Check if window is available (browser environment)
          if (typeof window !== 'undefined') {
            const savedFilteredData = localStorage.getItem('filteredFyiData');
            if (savedFilteredData) {
              this.filteredFyiData = JSON.parse(savedFilteredData);
            } else {
              this.filteredFyiData = this.fyiData;
            }
          } else {
            this.filteredFyiData = this.fyiData;
          }
        },
        error: (err) => console.error('Error loading the data', err),
      });
    }




  filterResults($event : any) {
    let text = $event;
    if (!text) {
      this.filteredFyiData = this.fyiData;
      return;
    }
  
    this.filteredFyiData = this.fyiData.filter(
      fyiData => fyiData?.title.toLowerCase().includes(text.toLowerCase())
    );
   
  }
  openContent(data: any){ 
    this.auth.boolean$.subscribe(value => {let v = value
      if(v === true){
        this.router.navigateByUrl('/view', { state: { data } });
      }
      else{
        alert("Please login to access FYI Plans");
      }

    })  

  }
}
