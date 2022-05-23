import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiServerUrl = environment.BASE_URL
  constructor(private http: HttpClient) {

   }

  //  public diplayImages(): Observable<any[]>{
  //   return this.http.get<any[]>(`${this.apiServerUrl}`);
  //  }
   
}
