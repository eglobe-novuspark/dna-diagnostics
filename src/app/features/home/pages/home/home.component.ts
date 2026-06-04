import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FeaturedTestSectionComponent } from '../../components/featured-test-section/featured-test-section.component';
import { TestCategorySectionComponent } from '../../components/test-category-section/test-category-section.component';
import { DnaLabSectionComponent } from '../../components/dna-lab-section/dna-lab-section.component';
import { HomeTestimonialsComponent } from '../../components/home-testimonials/home-testimonials.component';
import { PopularComponent } from '../../components/popular/popular.component';
import { WhyChooseComponent } from '../../components/why-choose/why-choose.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeroSectionComponent,FeaturedTestSectionComponent,TestCategorySectionComponent,DnaLabSectionComponent,HomeTestimonialsComponent,PopularComponent,WhyChooseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
