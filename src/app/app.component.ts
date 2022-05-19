import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articlesService.fetchArticles();
  }
}
