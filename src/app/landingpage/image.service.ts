import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Image {
  
  url: string;
  title: string;
  
}
@Injectable({
  providedIn: 'root'
})


export class ImageService {

  private apiUrl = "https://foryourinnerman.vercel.app/api/image";

  // getImage(): Observable<any> {
  //   return this.http.get('https://your-api-url.vercel.app/api/image');
  // }


 
  constructor(private http: HttpClient) {}

  getImage(): Observable<Image> {
    return this.http.get<Image>('https://foryourinnerman.vercel.app/api/image');
  }
}
