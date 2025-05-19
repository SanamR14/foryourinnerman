import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { TileComponent } from '../tile/tile.component';
import { FooterComponent } from '../footer/footer.component';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageService } from './image.service';

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
  
  ngOnInit(): void {
    this.imageService.getImage().subscribe({
      next: (res) => 
        this.imageUrl = res,
      error: () => console.error('Error loading daily image'),
    });
    console.log(this.imageUrl);
  }

   homeData = [
    {
      message : "The nature of love was first shown from God towards humanity. Do we really think of His everlasting love? There is a God who shows unconditional love to us. Lets start to love Him and experience more of His love because He first loved us."
    }
  ]
 

}
