import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../features/home/pages/home/home.component';
import { AboutPageComponent } from '../../../features/about/pages/about-page/about-page.component';
import { TestListPageComponent } from '../../../features/tests/pages/test-list-page/test-list-page.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HomeComponent,AboutPageComponent,TestListPageComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
