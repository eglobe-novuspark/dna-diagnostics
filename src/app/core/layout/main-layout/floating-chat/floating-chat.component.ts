import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   // ← Important for ngModel

@Component({
  selector: 'app-floating-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './floating-chat.component.html',
  styleUrl: './floating-chat.component.scss'
})
export class FloatingChatComponent {
  isOpen = false;
  messages: any[] = [];
  newMessage = '';

  doctorImage = 'assets/doctor2.png'; // Replace with real image

  toggleChat() {
    this.isOpen = !this.isOpen;
    
    // Add welcome message when opening first time
    if (this.isOpen && this.messages.length === 0) {
      this.messages.push({
        from: 'doctor',
        text: 'Hi there 👋\nHow can I help you?',
        time: '0:03'
      });
    }
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;

    // Add user message
    this.messages.push({
      from: 'user',
      text: this.newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    this.newMessage = '';

    // Simulate doctor reply (you can replace this with real backend later)
    setTimeout(() => {
      this.messages.push({
        from: 'doctor',
        text: 'Thank you for your message. Dr Archana will reply soon.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 800);
  }
}