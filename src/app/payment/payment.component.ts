import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentsform =new FormGroup({
    emailaddress:new FormControl("",[Validators.required,Validators.email]),
    nameoncard:new FormControl("",[Validators.required]),
    cardnumber:new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
    expirydate:new FormControl("",[Validators.required,]),
    cvv:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.paymentsform.get('emailaddress')?.value);
  }
}
