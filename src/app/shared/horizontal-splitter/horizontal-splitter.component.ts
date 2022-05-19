import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-splitter',
  templateUrl: './horizontal-splitter.component.html',
  styleUrls: ['./horizontal-splitter.component.css'],
})
export class HorizontalSplitterComponent implements OnInit {
  @Input('txt') name?: string;
  constructor() {}

  ngOnInit(): void {}
}
