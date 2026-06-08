import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  currentSlide = 0;
  totalSlides = 4;
  interval: any;

  @ViewChildren('scrollSection')
  scrollSections!: QueryList<ElementRef>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {

    // IMPORTANT
    if (isPlatformBrowser(this.platformId)) {

      this.startSlider();

      // CHECK IF SUPPORTED
      if ('IntersectionObserver' in window) {

        const observer = new IntersectionObserver(
          (entries) => {

            entries.forEach((entry) => {

              if (entry.isIntersecting) {

                entry.target.classList.add('in-view');

                observer.unobserve(entry.target);

              }

            });

          },
          { threshold: 0.1 }
        );

        this.scrollSections.forEach((section: any) => {
          observer.observe(section.nativeElement);
        });

      }

    }

  }

  startSlider() {

    this.interval = setInterval(() => {

      this.currentSlide =
        (this.currentSlide + 1) % this.totalSlides;

    }, 5000);

  }

  goToSlide(i: number) {

    this.currentSlide = i;

    clearInterval(this.interval);

    this.startSlider();

  }

  ngOnDestroy() {

    if (this.interval) {
      clearInterval(this.interval);
    }

  }

}