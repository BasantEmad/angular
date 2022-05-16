import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/sharedsSrvice/patient.service';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  
  object = new patient;
  constructor(private serv : PatientService, private route : Router) { }

  ngOnInit(): void {
  }
  update(){
    this.serv.put(this.object, 1).subscribe( data => {
            
  
      this.route.navigateByUrl('updatepatient');
    });

}
}