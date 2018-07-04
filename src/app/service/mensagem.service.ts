import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http: Http) {
  }

  public buscarTodasMensagens() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get(environment.urlBase+'/mensagens').pipe(map((res:any) => res.json()));
  }
}
