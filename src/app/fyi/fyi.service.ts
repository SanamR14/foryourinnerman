import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
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

  private fyiData = new BehaviorSubject<any>(null);
  public fyidata$ = this.fyiData.asObservable();

  constructor(private http: HttpClient) {}

  getData(): Observable<FyiDataService[]> {

    if (this.fyiData.value) {
      return of(this.fyiData.value);
    }
    return this.http.get<FyiDataService[]>(this.apiUrl).pipe(
      tap(data => this.fyiData.next(data))
    );
  }
}
