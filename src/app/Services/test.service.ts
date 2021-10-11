import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  public AddContact(request:any) : Observable<any>{

    //Header
    const headear = new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    );

    let ContactDto = {
      IdUsuario: 1,
      Nombres: request.firstname.toString(),
      Apellidos: request.lastname.toString(),
      Direccion: request.address.toString(),
      Telefono: request.tel.toString(),
      Email: request.email.toString(),
    }
    console.log(JSON.stringify(ContactDto));
    //Enviar POST
    return this.httpClient.post("http://localhost:9902/api/contact/add/", JSON.stringify(ContactDto),{headers: headear})
  }

  public GetContacts(): Observable<any>
  {
      //Header
      const headear = new HttpHeaders(
        {
          'Content-Type':'application/json'
        }
      );
  
      //Enviar POST
      return this.httpClient.get("http://localhost:9902/api/contact/getall?idUsuario=1", {headers: headear})
  
  }

}
