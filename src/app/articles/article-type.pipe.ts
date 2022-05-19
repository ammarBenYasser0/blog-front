import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../shared/article.model';

@Pipe({
  name: 'articleType',
})
export class ArticleTypePipe implements PipeTransform {
  transform(value: Article[], type: string): Article[] {
    if (type == undefined) {
      return value;
    } else {
      return value.filter((article) => {
        return article.lbl === type;
      });
    }
  }
}
