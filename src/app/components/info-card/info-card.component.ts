import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input()
  title: string | undefined | null;
  @Input()
  description: string | undefined | null;
  @Input()
  img: string | undefined | null;

  constructor() { }

  ngOnInit(): void {
  }

}
