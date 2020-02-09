import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const lazyCss = document.createElement('link');
    lazyCss.rel = 'stylesheet';
    lazyCss.href = 'blog.css';

    document.head.appendChild(lazyCss);
  }
}
