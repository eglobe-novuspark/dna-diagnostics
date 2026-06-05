import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { FloatingChatComponent } from './floating-chat/floating-chat.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,FloatingChatComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
