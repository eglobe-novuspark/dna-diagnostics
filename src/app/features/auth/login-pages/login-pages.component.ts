import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent {
  showPassword = false;

  togglePassword() {

    this.showPassword = !this.showPassword;

  }
}
