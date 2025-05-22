// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://foryourinnerman.vercel.app/api';
  
  private tokenSubject = new BehaviorSubject<string | null>(localStorage.getItem('token'));
  token$ = this.tokenSubject.asObservable();

  private booleanState = new BehaviorSubject<boolean>(false);
  boolean$ = this.booleanState.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.setBoolean(true);
        this.tokenSubject.next(res.token);
      })
    );
  }

  signup(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/signup`, { email, password }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this.setBoolean(true);
        this.tokenSubject.next(res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.setBoolean(false);
    this.tokenSubject.next(null);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

    setBoolean(value: boolean) {
    this.booleanState.next(value);
  }
}
