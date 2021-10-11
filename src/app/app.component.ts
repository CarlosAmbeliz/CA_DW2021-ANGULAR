import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from './Services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dw-ui';

  constructor(private router: Router, private testService: TestService)
  {

  }

  public navegarLogin():void
  {
    this.router.navigate(['/login']);
  }

  public navegarContactos():void
  {
    this.router.navigate(['/contacts']);
  }

  public navegarAddContactos():void{
    this.router.navigate(['/add']);
  }

  public CallService(): void{

  }
}
