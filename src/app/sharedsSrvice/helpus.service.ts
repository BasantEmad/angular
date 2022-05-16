import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Helpus} from '../models/helpus';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})

export class HelpusService extends ApiFunctionsService<Helpus>{

  constructor(public http:HttpClient) {
    super("http://localhost:3000/Help-us" ,http)
   }
}
