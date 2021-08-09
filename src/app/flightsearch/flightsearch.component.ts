import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.css']
})
export class FlightsearchComponent implements OnInit {

  nofpass:any = [1,2,3,4,5,6,7,8,9]
  tclass:any = ["Economy","Business"]

  flightsearchform =new FormGroup({
    sourcelocation:new FormControl("",[Validators.required]),
    destinationlocation:new FormControl("",[Validators.required]),
    departuredate:new FormControl("",[Validators.required]),
    returndate:new FormControl("",[Validators.required,]),
    passengers:new FormControl("",[Validators.required,Validators.min(1),Validators.max(10)]),
    travelclass:new FormControl("",[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.flightsearchform.get('sourcelocation')?.value);
  }
}
