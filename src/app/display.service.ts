import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DisplayService {

  headers: Headers;
  options: RequestOptions;

  constructor(private http : Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });

  }




show() {

  alert('trst');
  const url = "https://reqres.in/api/users?page=2";
  return this.http.get(url).map(
    response => {
    const data = response.json();
      alert(data);
      console.log('data', data);
      return data;

     } );

}

public adduser(url: string, param: any): Observable <any> {
  alert(param);
  const url1 = "https://reqres.in/api/users?page=2";
    const body = JSON.stringify(param);
      return this.http
          .post(url1, body, this.options)
          .map(
            res => {
              alert(res);
             const data = res.json();
              console.log(data);
              return data;

            }
          );
}




}