import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpus } from 'src/app/models/helpus';
import { HelpusService } from 'src/app/sharedsSrvice/helpus.service';

@Component({
  selector: 'app-updatehelpus',
  templateUrl: './updatehelpus.component.html',
  styleUrls: ['./updatehelpus.component.css']
})
export class UpdateHelpusComponent implements OnInit {
  [x: string]: any;
  
  object = new Helpus;
  constructor(private serv : HelpusService, private route : Router) { }

  ngOnInit(): void {
  }
  update(){
    this.serv.put(this.object, this.id).subscribe( data => {
            
  
      this.route.navigateByUrl('updatedoctors');
    });

}
}
