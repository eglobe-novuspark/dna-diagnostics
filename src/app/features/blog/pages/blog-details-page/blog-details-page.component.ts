import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Blog } from '../../data/blogs.mock';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BLOGS_MOCK } from '../../models/blogs.mock';

@Component({
  selector: 'app-blog-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-details-page.component.html',
  styleUrl: './blog-details-page.component.scss'
})
export class BlogDetailsPageComponent {
  blog!: Blog;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const slug =
      this.route.snapshot.paramMap.get('slug');

    const foundBlog =
      BLOGS_MOCK.find(
        item => item.slug === slug
      );

    if (foundBlog) {
      this.blog = foundBlog;
    }

  }
}
