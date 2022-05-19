import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/shared/article.model';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-pinned-articles',
  templateUrl: './pinned-articles.component.html',
  styleUrls: ['./pinned-articles.component.css'],
})
export class PinnedArticlesComponent implements OnInit {
  constructor(private articlesService: ArticlesService) {}

  pinnedArticles: Article[] = [];
  articlesSub!: Subscription;

  ngOnInit(): void {
    this.pinnedArticles = this.articlesService.getArticles();
    this.articlesService.articlesSub.subscribe((articles: Article[]) => {
      this.pinnedArticles = articles.filter((article) => {
        return article.pinned == true;
      });
    });
  }
}
