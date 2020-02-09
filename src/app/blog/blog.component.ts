import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    import('../../assets/css/blog-css-loader.js').then(() => {
      // this block executes when blog-css-loader.js is loaded.
    });
  }
}
