import { Component, OnInit } from '@angular/core';
import { DisplayService } from '..//display.service'

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css'],
  providers: [DisplayService]
})
export class ShowdataComponent implements OnInit {

  userdata;

  constructor(private displaydata : DisplayService) { }

  ngOnInit() {
  }

 getuser(){
   this.displaydata.show().subscribe(res => {
     this.userdata= res;
   })
 }

}
