import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent, 
},
{
  path: 'contacts',
  component: ContactsComponent, 
},
{
  path: 'add',
  component: AddContactComponent, 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
