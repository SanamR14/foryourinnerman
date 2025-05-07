import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { title } from 'process';
import { FyiDataService, FyiService } from './fyi.service';

export interface FyiData {
  image: string;
  message: string;
  author: string;
  height: string;
  width: string;
  imgHeight: string;
  imgWidth: string;
  textAlign: string;
  marginTop: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-fyi',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,TileComponent,FooterComponent],
  templateUrl: './fyi.component.html',
  styleUrl: './fyi.component.scss'
})
export class FyiComponent {

   @ViewChild(SearchComponent) search: any;
   
  
    filteredFyiData: FyiData[] =[];
    fyi: FyiDataService[] = [];

    constructor(private fyiService: FyiService){
      this.filteredFyiData = this.FyiData;
    }
  
    ngOnInit() {
      this.fyiService.getData().subscribe({
        next: data => this.fyi = data,
        error: err => console.error('Error loading the data', err)
      });
      for(let i=0; i< this.fyi.length; i++){
        if(this.fyi[i].title == this.FyiData[i].title){
          this.FyiData[i].content = this.fyi[i].message;
        }
      }
    }

    FyiData = [
      {
      image: "../../assets/pain.jpeg",
      message: "PAIN",
      author: "by FYI",
      height:"460px",
      width:"355px",
      imgHeight: "300px",
      imgWidth: "307px",
      textAlign: "left",
      marginTop: "1rem",
      title: "DO NOT WASTE YOUR PAIN",
      content: ""
    },
    {
      image: "./../assets/worried.jpeg",
      message: "Are you worried",
      author: "by FYI",
      height:"460px",
      width:"355px",
      imgHeight: "300px",
      imgWidth: "307px",
      textAlign: "left",
      marginTop: "1rem",
      title: "SOURCE OF EVERYTHING",
      content: ""
    },
    {
      image: "./../assets/search.jpeg",
      message: "What are you searching?",
      author: "by FYI",
      height:"460px",
      width:"355px",
      imgHeight: "300px",
      imgWidth: "307px",
      textAlign: "left",
      marginTop: "1rem",
      title: "SEEK HIM",
      content: ""
    },
    {
      image: "./../assets/leader.jpeg",
      message: "Want to be a leader?",
      author: "by FYI",
      height:"460px",
      width:"355px",
      imgHeight: "300px",
      imgWidth: "307px",
      textAlign: "left",
      marginTop: "1rem",
      title: "A LEADER",
      content: ""
    },
    {
      image: "./../assets/waiting.jpg",
      message: "Are you waiting?",
      author: "by FYI",
      height:"460px",
      width:"355px",
      imgHeight: "300px",
      imgWidth: "307px",
      textAlign: "left",
      marginTop: "1rem",
      title: "DO NOT WASTE YOUR PAIN",
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
      FyiData => FyiData?.message.toLowerCase().includes(text.toLowerCase())
    );
   
  }
}
