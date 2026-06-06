import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desktop-header',
  standalone: true,
  imports: [SearchBarComponent,NavbarComponent,RouterLink],
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.scss'
})
export class DesktopHeaderComponent {
  

}
