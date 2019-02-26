import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application.json' })
};

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http:HttpClient) { }

  getDogs() {
    return this.http.get('/server/api/v1/dogs');
  }

  getDog(id: number) {
    return this.http.get('/server/api/v1/dogs/' + id);
  }

  createDogInformation(dog) {
    let body = JSON.stringify(dog);
    return this.http.post('/server/api/v1/dogs', body, httpOptions);
  }
}
