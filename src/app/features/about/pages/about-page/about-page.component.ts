import { Component } from '@angular/core';
import { AboutBannerComponent } from '../../components/about-banner/about-banner.component';
import { AboutHeroComponent } from '../../components/about-hero/about-hero.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutBannerComponent,AboutHeroComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
