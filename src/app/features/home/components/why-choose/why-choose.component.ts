import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss'
})
export class WhyChooseComponent {
  hospitalLogos: string[] = [
    'https://dnalabsindia.com/storage/2024/06/apollo-hospitals.webp',
    'https://dnalabsindia.com/storage/2024/06/fortis.webp',
    'https://dnalabsindia.com/storage/2024/06/medanta.webp',
    'https://dnalabsindia.com/storage/2024/06/maxhealthcare.webp',
    'https://dnalabsindia.com/storage/2024/06/AIIMS.webp',           // Add more as needed
    'https://dnalabsindia.com/storage/2024/06/fertimax.webp'
  ];
}