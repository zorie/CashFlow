import { HttpRequesterOptionsFactoryService } from '../../shared/services/http/http-requester-options-factory.service';
import { HttpRequester } from '../../shared/services/http/http-requester.service';
import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Response } from '@angular/http';
import { User } from './../models/user.model';

@Injectable()
export class UserService {

  private userApiUrl: string = '/api/users';
  private logoutApiUrl: string = '/api/logout';
  private contentTypeHeaderObject: {} = { 'Content-Type': 'application/json' };

  private isLogged: boolean = false;

  constructor(
    private httpRequesterService: HttpRequester,
    private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) {
    this.isLogged = !!localStorage.getItem('auth_token');
  }

  registerUser(user: Object): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }

  loginUser(user: Object): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, user, this.contentTypeHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  logoutUser(): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(this.logoutApiUrl);
    return this.httpRequesterService.get(httpRequestOptions);
  }

  isLoggedIn() {
    return this.isLogged;
  }

  setLoggedUser(authResponse) {
    localStorage.setItem('user', JSON.stringify(authResponse));
  }
}
