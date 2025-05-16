import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seleccion } from '../../shared/entidades/Seleccion';
import { environment } from '../../environments/enviroment-prod';


@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  url : string;

  constructor(private http:HttpClient) { 
    this.url=`${environment.urlAPI}selecciones/`;
  }

  public listar(): Observable<Seleccion[]> {
    return this.http.get<Seleccion[]>(`${this.url}listar`);
  }
  
}
