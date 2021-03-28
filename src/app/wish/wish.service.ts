import { Wish } from './wish.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient ) { }

  listar() : Observable<any>{

    let httpParams = new HttpParams();
    httpParams.set('body','codigoSmiles:1234560003');
    let httpHeaders = new HttpHeaders()
    .set('Accept', 'application/json');
   // console.log("Listar wish",this.http.get<any>( 'http://localhost:8080/smiles/buscar/wish-list/1234560003'),{headers: httpHeaders});

    return this.http.get<Wish>( 'http://localhost:8080/smiles/buscar/wish-list',{headers: httpHeaders});
  }
}
