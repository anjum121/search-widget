import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserServiceService {

  baseURL = 'http://localhost:4372';

  constructor(private http: Http) {
  }


  getUsers(str: string) {
    return this.http.get(`${this.baseURL}/users?name_like=${str}`);
  }

}
