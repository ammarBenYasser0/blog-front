import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Article } from 'src/app/shared/article.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
})
export class ArticleDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  article!: Article;
  isLoading = true;

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.article = data['selectedArticle'];
      this.isLoading = false;
    });
  }
}
