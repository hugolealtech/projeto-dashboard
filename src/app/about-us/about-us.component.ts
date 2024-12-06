import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {}
