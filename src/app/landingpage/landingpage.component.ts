import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { imageData, ImageService } from './image.service';

export interface homeData {
  image: string;
  message: string;
  height: string;
  width: string;
}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,MatCardModule, NgIf],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})

export class LandingpageComponent {
  imageUrl: any;


  constructor( private imageService: ImageService){
    
  }
  
  ngOnInit() {
    this.imageService.getImage().subscribe({
      next: (data) => 
        this.imageUrl = data,
      error: () => console.error('Error loading daily image'),
    });
  }

 

}
