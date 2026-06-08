import { Component, signal, ViewChild } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { MobileSidebarComponent } from '../mobile-sidebar/mobile-sidebar.component';
import { FloatingChatComponent } from '../../main-layout/floating-chat/floating-chat.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    SearchBarComponent,
    MobileSidebarComponent,
    FloatingChatComponent
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

  @ViewChild(FloatingChatComponent)
  chatComponent!: FloatingChatComponent;

  isSidebarOpen = signal(false);

  openSidebar() {
    this.isSidebarOpen.set(true);
  }

  closeSidebar() {
    this.isSidebarOpen.set(false);
  }

  openWhatsAppChat() {
    this.chatComponent?.toggleChat();
  }
  toggleSidebar() {
  this.isSidebarOpen.update(value => !value);
}
}