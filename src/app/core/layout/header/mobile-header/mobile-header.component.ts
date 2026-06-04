import { Component, signal } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MobileSidebarComponent } from '../mobile-sidebar/mobile-sidebar.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [SearchBarComponent,SearchBarComponent,MobileSidebarComponent],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {
  isSidebarOpen = signal(false);
  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }
}
