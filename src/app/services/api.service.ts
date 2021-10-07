import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public ObtenerPaises(){
    console.log("llega al servicio");
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  public ObtenerMiGit(){
    console.log("llega al servicio");
    return this.http.get("https://api.github.com/users/sofiaroumieu");
  }
}