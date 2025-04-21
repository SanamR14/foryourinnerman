import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';

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
}

@Component({
  selector: 'app-fyi',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,TileComponent,FooterComponent,NgIf],
  templateUrl: './fyi.component.html',
  styleUrl: './fyi.component.scss'
})
export class FyiComponent {

   @ViewChild(SearchComponent) search: any;
  
    filteredFyiData: FyiData[] =[];

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
    },
  ]

  constructor(){
    this.filteredFyiData = this.FyiData;
  }

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
