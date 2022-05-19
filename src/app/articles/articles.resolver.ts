import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../shared/article.model';
import { ArticlesService } from './articles.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesResolver implements Resolve<Article> {
  constructor(private articlesService: ArticlesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article> | Promise<Article> | Article {
    const articleId = route.params['id'];
    return this.articlesService.getArticle(articleId).then((article) => {
      return article;
    });
  }
}
