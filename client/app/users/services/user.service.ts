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
  private forgottenPass: string = '/api/forgotten-pass';

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
    let authHeaderObject = this.getAuthHeaderObject();

    const httpRequestOptions = this.httpRequesterOptionsFactory.createHttpRequesterOptions(
      this.logoutApiUrl,
      {},
      authHeaderObject
    );

    return this.httpRequesterService.get(httpRequestOptions);
  }

  getUserProfile(): Observable<Response> {
    let authHeaderObject = this.getAuthHeaderObject();

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userApiUrl, {}, authHeaderObject);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  updateUserProfile(user: User): Observable<Response> {
      const updateProfileUrl = this.userApiUrl + '/' + user._id,
        authHeaderObject = this.getAuthHeaderObject();

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(updateProfileUrl, user , authHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }

  isLoggedIn() {
    return this.isLogged;
  }

  getLoggedUser() {
    return localStorage.getItem('user');
  }

  setLoggedUser(authResponse) {
    localStorage.setItem('user', JSON.stringify(authResponse));
  }

  getAuthHeaderObject() {
    let userDataString: string = localStorage.getItem('user');
    let token: string = JSON.parse(userDataString).auth_token;

    let authHeaderObject = {
      'Content-Type': 'application/json',
      'Authorization': token
    };

    return authHeaderObject;
  }

  sendNewAutoGeneratedPassword(email: string): Observable<Response> {
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.forgottenPass, { userEmail: email }, this.contentTypeHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }
}
