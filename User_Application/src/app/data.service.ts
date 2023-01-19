import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetail } from './type';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getUserInformation() {
    return this._httpClient.get<UserDetail[]>('https://jsonplaceholder.typicode.com/users');
  }
}
