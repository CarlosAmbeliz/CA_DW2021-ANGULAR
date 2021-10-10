import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  resultado:any=[];
  constructor(private testService: TestService) {
    this.testService.GetContacts().subscribe(result=>{
      this.resultado = result;
      console.log(this.resultado[0].nombres);
    })
   }

  ngOnInit(): void {
  }

}
