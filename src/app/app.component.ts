import { Component } from '@angular/core';
import { IndexPageComponent } from './index-page/index-page.component';


@Component({
  selector: 'app-root',
  imports: [IndexPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'evertec_help_system';
  
}
