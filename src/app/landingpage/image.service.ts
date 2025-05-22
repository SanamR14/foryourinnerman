import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface imageData {
  url: string;
  title: string;  
  createdAt: string;
}
@Injectable({
  providedIn: 'root'
})


export class ImageService {

 private apiUrl = "https://foryourinnerman.vercel.app/api/image";

   private imageData = new BehaviorSubject<any>(null);
   public imagedata$ = this.imageData.asObservable();
 
  constructor(private http: HttpClient) {}

  getImage(): Observable<imageData[]> {

    if (this.imageData.value) {
      return of(this.imageData.value);
    }
    return this.http.get<imageData[]>(this.apiUrl).pipe(
      tap(res => this.imageData.next(res)));
  }
}
