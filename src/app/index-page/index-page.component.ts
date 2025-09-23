import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index-page',
  imports: [NavbarComponent, RouterModule],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {

}
