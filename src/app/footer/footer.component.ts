import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../autenticacao/auth.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [CommonModule, RouterLink,LoginComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
