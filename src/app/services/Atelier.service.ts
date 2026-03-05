import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atelier } from '../models/Atelier';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {
  private apiUrl = 'http://localhost:3000/Atelier'; // URL mte3 el backend (json-server par ex)

  constructor(private http: HttpClient) { }

  getAll(): Observable<Atelier[]> { return this.http.get<Atelier[]>(this.apiUrl); }
  
  getById(id: string): Observable<Atelier> { return this.http.get<Atelier>(`${this.apiUrl}/${id}`); }

  add(Atelier: Atelier): Observable<Atelier> { return this.http.post<Atelier>(this.apiUrl, Atelier); }

  update(id: string, Atelier: Atelier): Observable<Atelier> { return this.http.put<Atelier>(`${this.apiUrl}/${id}`, Atelier); }

  delete(id: string): Observable<any> { return this.http.delete(`${this.apiUrl}/${id}`); }


 
  
}
