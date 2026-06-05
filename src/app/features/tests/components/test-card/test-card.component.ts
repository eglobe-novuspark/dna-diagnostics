import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Test } from '../../models/test.interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-test-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss'
})
export class TestCardComponent implements OnInit{
 @Input() test!: Test;
  @Output() bookNow = new EventEmitter<Test>();

  onBookNow() {
    this.bookNow.emit(this.test);
  }
  ngOnInit(): void {
    
  }
}
