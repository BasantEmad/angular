import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/models/Doctors';
import { DoctorsService } from 'src/app/sharedsSrvice/doctors.service';



@Component({
  selector: 'app-updatedoctors',
  templateUrl: './updatedoctors.component.html',
  styleUrls: ['./updatedoctors.component.css']
})
export class UpdateDoctorsComponent implements OnInit {
  [x: string]: any;
  
  object = new Doctors;
  constructor(private serv :DoctorsService , private route : Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  update(){
      this.serv.put(this.object, 1).subscribe( data => {
              
    
        this.route.navigateByUrl('updatedoctors');
      });

}
}
