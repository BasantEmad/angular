import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/sharedsSrvice/doctors.service';


@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent implements OnInit {

  allData:[] ;

  constructor ( private serv : DoctorsService) { 
    
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
