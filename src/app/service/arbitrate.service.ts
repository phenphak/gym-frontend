import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arbitrate } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ArbitrateService {
  private url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  addArbitrateForGym(arbitrate :Arbitrate , idGym :number):Observable<Arbitrate>{
      return this.http.post<Arbitrate>(`${this.url}/addArbitrateForGym/${idGym}`,arbitrate);
  }

  addArbitrateForSport(idArbitrate : number , idSport : number):Observable<Arbitrate>{
      return this.http.post<Arbitrate>(`${this.url}/addArbitrateForSport/${idArbitrate}/${idSport}`,null);
  }

  editArbitrate(arbitrate : Arbitrate, idArbitrate : number):Observable<Arbitrate>{
      return this.http.put<Arbitrate>(`${this.http}/ editArbitrate/${idArbitrate}`,arbitrate);
  }
  deleteArbitrate(idArbitrate :number) : Observable<Arbitrate>{
     return this.http.delete<Arbitrate>(`${this.url}/deleteArbitrate/${idArbitrate}`);
  }

  findArbitrateById(idArbitrate :number):Observable<Arbitrate>{
    return this.http.get<Arbitrate>(`${this.url}/findArbitrateById/${idArbitrate}`);
  }


  findAllArbitrates():Observable<Arbitrate[]>{
     return this.http.get<Arbitrate[]>(`${this.url}/findAllArbitrates`);

  }

  findArbitratesForSport(idSport : number):Observable<Arbitrate[]>{
    return this.http.get<Arbitrate[]>(`${this.url}/findArbitratesForSport/${idSport}`);
  }

  findArbitratesForGym(idGym :number):Observable<Arbitrate[]>{
    return this.http.get<Arbitrate[]>(`${this.url}/findArbitratesForGym/${idGym}`);
  }
}
