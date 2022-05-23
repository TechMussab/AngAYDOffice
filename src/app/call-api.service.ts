import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  Site:string = 'http://atyourdoorstep-pk.herokuapp.com/api/';
  constructor(private http:HttpClient) { }

    getData(apiUrl: string) {
     return this.http.get(this.Site+apiUrl)
     .pipe(catchError(
         (error)=>{
           console.log(error);
           return throwError('error')
         }
       )
     )
   }
}
