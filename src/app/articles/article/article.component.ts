import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  @Input('title') title!: string;
  @Input('img') img!: string;
  @Input('date') date!: string;
  @Input('id') id!: string;

  ngOnInit(): void {}
}
