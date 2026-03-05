import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atelier } from '../models/Atelier';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  private apiUrl = 'http://localhost:3000/ateliers'; 
  constructor(private http: HttpClient) { }

  getAll(): Observable<Atelier[]> { 
    return this.http.get<Atelier[]>(this.apiUrl); 
  }
  
  getById(id: string): Observable<Atelier> { 
    return this.http.get<Atelier>(`${this.apiUrl}/${id}`); 
  }

  add(atelier: Atelier): Observable<Atelier> { 
    return this.http.post<Atelier>(this.apiUrl, atelier); 
  }

  update(id: string, atelier: Atelier): Observable<Atelier> { 
    return this.http.put<Atelier>(`${this.apiUrl}/${id}`, atelier); 
  }

  delete(id: string): Observable<any> { 
    return this.http.delete(`${this.apiUrl}/${id}`); 
  }
}