import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FyiDataService, FyiService } from './fyi.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

export interface FyiData {
  image: string;
  title: string;
  author: string;
  innerTitle: string;
  content: string;
}

@Component({
  selector: 'app-fyi',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,MatCardModule,FooterComponent,NgFor],
  templateUrl: './fyi.component.html',
  styleUrl: './fyi.component.scss'
})
export class FyiComponent {

   @ViewChild(SearchComponent) search: any;
   
  
    filteredFyiData: FyiData[];
    fyi: FyiDataService[] = [];

    constructor(private fyiService: FyiService, private router: Router){
      this.filteredFyiData = this.FyiData;
    }
  
    ngOnInit() {
      this.fyiService.getData().subscribe({
        next: data => this.fyi = data,
        error: err => console.error('Error loading the data', err)
      });
      for(let i=0; i< this.fyi.length; i++){
        if(this.fyi[i].title == this.FyiData[i].innerTitle){
          this.FyiData[i].content = this.fyi[i].message;
        }
        
      }
    }

    FyiData = [
      {
      image: "../../assets/pain.jpeg",
      title: "PAIN",
      author: "by FYI",
      innerTitle: "DO NOT WASTE YOUR PAIN",
      content: ""
    },
    {
      image: "./../assets/worried.jpeg",
      title: "Are you worried",
      author: "by FYI",
      innerTitle: "SOURCE OF EVERYTHING",
      content: ""
    },
    {
      image: "./../assets/search.jpeg",
      title: "What are you searching?",
      author: "by FYI",
      innerTitle: "SEEK HIM",
      content: ""
    },
    {
      image: "./../assets/leader.jpeg",
      title: "Want to be a leader?",
      author: "by FYI",
      innerTitle: "A LEADER",
      content: ""
    },
    {
      image: "./../assets/waiting.jpg",
      title: "Are you waiting?",
      author: "by FYI",
      innerTitle: "DO NOT WASTE YOUR PAIN",
      content: ""
    },
  ]



  filterResults($event : any) {
    let text = $event;
    if (!text) {
      this.filteredFyiData = this.FyiData;
      return;
    }
  
    this.filteredFyiData = this.FyiData.filter(
      FyiData => FyiData?.title.toLowerCase().includes(text.toLowerCase())
    );
   
  }
  openContent(data: any){
    this.fyiService.viewData = data;
    this.router.navigateByUrl("/view");
  }
}
