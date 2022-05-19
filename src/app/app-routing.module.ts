import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesResolver } from './articles/articles.resolver';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'articles', component: ArticlesComponent },
  {
    path: 'articles/:cat',
    component: ArticlesComponent,
  },
  {
    path: 'article/:id',
    component: ArticleDetailsComponent,
    resolve: { selectedArticle: ArticlesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
