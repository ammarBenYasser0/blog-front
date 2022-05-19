import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../shared/article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit, OnDestroy {
  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  articles: Article[] = [];
  articlesSub!: Subscription;
  selectedCat!: string;
  isLoading = true;
  start = 0;
  end = 8;
  pageNum = 1;
  numOfPages!: number;

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.selectedCat = param['cat'];
    });

    this.articles = this.articlesService.getArticles();
    if (this.articles.length != 0) {
      this.isLoading = false;
    }
    this.articlesSub = this.articlesService.articlesSub.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
        this.isLoading = false;
        this.numOfPages = Math.ceil(this.articles.length / 9);
      }
    );
  }

  ngOnDestroy(): void {
    this.articlesSub.unsubscribe();
  }

  nextPage() {
    this.pageNum++;
    this.start += 9;
    this.end += 9;
  }

  previousPage() {
    this.pageNum--;
    this.start -= 9;
    this.end -= 9;
  }
}
