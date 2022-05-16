import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/models/Doctors';
import { patient } from 'src/app/models/patient';
import { DoctorsService } from 'src/app/sharedsSrvice/doctors.service';


@Component({
  selector: 'app-adddoctors',
  templateUrl: './adddoctors.component.html',
  styleUrls: ['./adddoctors.component.css']
})
export class AdddoctorsComponent implements OnInit {


  object = new Doctors;
  constructor(private serv : DoctorsService, private route : Router) { }

  ngOnInit(): void {
  }

save(){
  this.serv.post(this.object).subscribe( data => {
          

    this.route.navigateByUrl('doctorslist');
  })

}
}