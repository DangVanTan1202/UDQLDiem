import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private rest_api = 'https://localhost:7016/api/APIQLDIEM/';


  constructor(private http: HttpClient  ) { }
  Get(parameter : string ){
    return this.http.get<any>(this.rest_api+parameter);
  }
  Put(parameter : any , body :any) : Observable<any>{
    return this.http.put<any>(this.rest_api+parameter ,body);
  }
  Delete(parameter : any, id: string ){
    return this.http.delete<any>(this.rest_api+parameter+'/'+id);
  }
  Post(parameter: any ,body :any): Observable<any>{
    return this.http.post<any>(this.rest_api+parameter ,body);
  }





  
}