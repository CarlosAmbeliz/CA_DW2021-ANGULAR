import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../Services/test.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  SERVER_URL = "http://localhost:3000/upload";


  uploadForm = this.formBuilder.group({
    firstname: '',
    lastname: '',
    address: '',
    tel: '',
    email: '',
  });

  constructor(private formBuilder: FormBuilder, private testService: TestService,private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit():void {
    let data = this.uploadForm.value;

    this.testService.AddContact(data).subscribe(result=>{
      console.log(result);
    });
    this.uploadForm.reset();
    this.router.navigate(['/contacts']);
  }

}
