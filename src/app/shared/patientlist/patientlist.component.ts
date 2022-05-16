import { Component, OnInit } from '@angular/core';
import { patient } from 'src/app/models/patient';
import { ApiFunctionsService } from 'src/app/sharedsSrvice/api-functions.service';
import { PatientService } from 'src/app/sharedsSrvice/patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

       allData:[] ;

  constructor ( private serv : PatientService) { 
    
    this.serv.getPatient().subscribe ((data:any)=> {
      this.allData= data
    })

    
  }

  ngOnInit(): void {
  }


  remove(id){
     this.serv.delete(id).subscribe((data)=>{
         

      window.location.reload();

     })
  }
}
