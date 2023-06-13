
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:5198/values';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }



}
