import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FyiDataService {
  _id?: string;
  title: string;
  message: string;
  outerTitle: string;
  author: string;
  image: string;
}


@Injectable({
  providedIn: 'root'
})
export class FyiService {

  public viewData: FyiDataService[] =[];

  private apiUrl = "https://foryourinnerman.vercel.app/api/data";
  constructor(private http: HttpClient) {}

  getData(): Observable<FyiDataService[]> {
    return this.http.get<FyiDataService[]>(this.apiUrl);
  }
}
