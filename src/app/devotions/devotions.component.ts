import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { title } from 'node:process';


export interface devotionData {
  message: string;
  height: string;
  width: string;
}
@Component({
  selector: 'app-devotions',
  standalone: true,
  imports: [HeaderComponent,SearchComponent,TileComponent,FooterComponent,NgIf],
  templateUrl: './devotions.component.html',
  styleUrl: './devotions.component.scss'
})
export class DevotionsComponent {

  devotionData = [
    {
    message: "Topic 1",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 2",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 3",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 4",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 5",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 6",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 7",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 8",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 9",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 10",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 11",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 12",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 13",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 14",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 15",
    height:"132px",
    width:"280px"
  },
  {
    message: "Topic 16",
    height:"132px",
    width:"280px"
  }
]
}
