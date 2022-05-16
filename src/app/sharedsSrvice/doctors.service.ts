import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../models/Doctors';
import { ApiFunctionsService } from './api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService extends ApiFunctionsService<Doctors>{

  constructor(public http:HttpClient) {
    super("http://localhost:3000/Doctors" ,http)
   }
}
