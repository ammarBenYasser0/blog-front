import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { PinnedArticlesComponent } from './articles/pinned-articles/pinned-articles.component';
import { HorizontalSplitterComponent } from './shared/horizontal-splitter/horizontal-splitter.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ArticleTypePipe } from './articles/article-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    PinnedArticlesComponent,
    HorizontalSplitterComponent,
    LoadingSpinnerComponent,
    ArticleTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
