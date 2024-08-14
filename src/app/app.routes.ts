import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component'; 
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'hobbies', component: HobbiesComponent },
    { path: 'contact', component: ContactComponent }
];
