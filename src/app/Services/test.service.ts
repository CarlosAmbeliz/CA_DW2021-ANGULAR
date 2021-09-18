import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  public callTestService(request:any) : Observable<any>{

    //Header
    const headear = new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    );

    //Enviar POST
    return this.httpClient.post("http://localhost:3000/test", JSON.stringify(request),{headers: headear})

  }
}
