import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface imageData {
  url: string;
  title: string;  
  createdAt: string;
}
@Injectable({
  providedIn: 'root'
})


export class ImageService {


  // getImage(): Observable<any> {
  //   return this.http.get('https://your-api-url.vercel.app/api/image');
  // }

 private apiUrl = "https://foryourinnerman.vercel.app/api/image";
 
  constructor(private http: HttpClient) {}

  getImage(): Observable<imageData[]> {
    return this.http.get<imageData[]>(this.apiUrl);
  }
}
