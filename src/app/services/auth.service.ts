// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://foryourinnerman.vercel.app/api';

  private loggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { withCredentials: true });

  }

  signup(email: string, password: string) {
  return this.http.post(`${this.apiUrl}/signup`, { email, password }, { withCredentials: true });

  }

  logout() {
   this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe();

  }

  isLoggedIn$() {
    return this.loggedIn$.asObservable();
  }

  // Optional: call this on app init to check session
  checkSession() {
    return this.http.get<{ user: any }>(`${this.apiUrl}/me`, { withCredentials: true })
  .subscribe(
    res => this.loggedIn$.next(true),
    err => this.loggedIn$.next(false)
  );

  }
}
