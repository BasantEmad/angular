import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { patient } from '../models/patient';
import { ApiFunctionsService } from './api-functions.service';


@Injectable({
  providedIn: 'root'
})
export class PatientService  extends ApiFunctionsService<patient>{

  constructor(public http:HttpClient) {
   
      super("http://localhost:3000/patient" ,http)
     
   }
}
