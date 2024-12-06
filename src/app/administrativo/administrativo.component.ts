import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-administrativo',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './administrativo.component.html',
  styleUrl: './administrativo.component.css'
})
export class AdministrativoComponent {

}
