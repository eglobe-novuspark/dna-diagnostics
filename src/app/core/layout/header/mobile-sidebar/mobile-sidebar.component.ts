import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss'
})
export class MobileSidebarComponent {
isOpen = input(true);

  closeSidebar = output<void>();
}
