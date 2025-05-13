import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { title } from 'node:process';
import { MatCardModule } from '@angular/material/card';


export interface DevotionData {
  message: string;
  height: string;
  width: string;
  textAlign: string;
  marginTop: string;
}
@Component({
  selector: 'app-devotions',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,MatCardModule,FooterComponent,NgFor],
  templateUrl: './devotions.component.html',
  styleUrl: './devotions.component.scss'
})
export class DevotionsComponent {
 
  @ViewChild(SearchComponent) search: any;

  filteredDevotionData: DevotionData[] =[];
  
    DevotionData = [
      {
      message: "Topic 1",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 2",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 3",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 4",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 5",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 6",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 7",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Topic 8",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 9",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 10",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 11",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 12",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 13",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 14",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 15",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    },
    {
      message: "Series 16",
      height:"132px",
      width:"280px",
      textAlign: "center",
      marginTop: "2.7rem",
    }
  ]

  constructor(){
    this.filteredDevotionData = this.DevotionData;
  }

  filterResults($event : any) {
    let text = $event;
    if (!text) {
      this.filteredDevotionData = this.DevotionData;
      return;
    }
  
    this.filteredDevotionData = this.DevotionData.filter(
      DevotionData => DevotionData?.message.toLowerCase().includes(text.toLowerCase())
    );
   
  }
}
