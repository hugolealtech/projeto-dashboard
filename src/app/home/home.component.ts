import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarousselComponent } from '../caroussel/caroussel.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LoginComponent } from '../login/login.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CarousselComponent,FooterComponent,AboutUsComponent,ContactFormComponent,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
