import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { imageData, ImageService } from './image.service';
import { interval } from 'rxjs';

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
   imageUrl: string = '';
  images: imageData[] = [];


  constructor( private imageService: ImageService){
    
  }
  
  ngOnInit() {
  this.imageService.getImage().subscribe({
      next: (res) => {
        this.images = res;
        this.updateImage(); // Immediately show one
        // interval(60000).subscribe(() => this.updateImage()); // Then every minute
      },
      error: () => console.error('Error loading images'),
    });

  }

    updateImage(){
    const now = new Date();
    const minuteIndex =
      now.getUTCFullYear() * 525600 +
      now.getUTCMonth() * 43200 +
      now.getUTCDate() * 1440 +
      now.getUTCHours() * 60 +
      now.getUTCMinutes();

    const index = minuteIndex % this.images.length;
    this.imageUrl = this.images[index]?.url; // Replace `url` with your actual field
  }

 

}
