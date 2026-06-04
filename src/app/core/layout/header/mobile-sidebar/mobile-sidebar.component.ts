import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss'
})
export class MobileSidebarComponent {
isOpen = input(false);

  closeSidebar = output<void>();
}
