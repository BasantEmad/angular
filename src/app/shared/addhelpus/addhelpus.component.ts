import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Helpus } from 'src/app/models/helpus';
import { HelpusService} from 'src/app/sharedsSrvice/helpus.service';

@Component({
  selector: 'app-addHelpus',
  templateUrl: './addHelpus.component.html',
  styleUrls: ['./addHelpus.component.css']
})

export class AddHelpusComponent implements OnInit {

  object = new Helpus;
  constructor(private serv : HelpusService, private route : Router) { }

  ngOnInit(): void {
  }

save(){
  this.serv.post(this.object).subscribe( data => {
          

    this.route.navigateByUrl('helpuslist');
  })

}
}


