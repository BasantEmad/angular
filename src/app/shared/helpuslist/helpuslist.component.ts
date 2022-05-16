import { Component, OnInit } from '@angular/core';
import { HelpusService } from 'src/app/sharedsSrvice/helpus.service';

@Component({
  selector: 'app-helpuslist',
  templateUrl: './helpuslist.component.html',
  styleUrls: ['./helpuslist.component.css']
})
export class HelpuslistComponent implements OnInit {

  allData:[] ;

  constructor ( private serv : HelpusService) { 
    
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
