import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorldBeanModel } from '../../model/helloWorldBeanModle';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorlBeanService(){
    return this.http.get<HelloWorldBeanModel>('http://localhost:8080/hello-world-bean');
  }
}
