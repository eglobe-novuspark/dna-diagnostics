import { Component } from '@angular/core';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { AnnouncementBarComponent } from './announcement-bar/announcement-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DesktopHeaderComponent,MobileHeaderComponent,AnnouncementBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
