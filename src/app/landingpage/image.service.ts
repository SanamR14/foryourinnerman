import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = "https://your-api-url.vercel.app/api/image";

  // getImage(): Observable<any> {
  //   return this.http.get('https://your-api-url.vercel.app/api/image');
  // }


 
  constructor(private http: HttpClient) {}

  getImage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
