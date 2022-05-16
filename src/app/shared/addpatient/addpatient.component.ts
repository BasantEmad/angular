import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/sharedsSrvice/patient.service';




@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {

  object = new patient;
  constructor(private serv : PatientService, private route : Router) { }

  ngOnInit(): void {
  }

save(){
  this.serv.post(this.object).subscribe( data => {
          

    this.route.navigateByUrl('patientlist');
  })

}
}


