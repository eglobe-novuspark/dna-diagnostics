import { Component } from '@angular/core';
import { BLOGS_MOCK } from '../../models/blogs.mock';
import { Blog } from '../../data/blogs.mock';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule,RouterModule
    
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
  blogs: Blog[] = BLOGS_MOCK;
}
