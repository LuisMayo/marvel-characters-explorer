import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/bean/serie';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  list: Serie[] = [];

  constructor(private route: ActivatedRoute, private marvel: MarvelService) { }

  ngOnInit(): void {
    this.marvel.getSeriesByCharacter(this.route.snapshot.paramMap.get('id') as string).then(response => this.list = response.data.results);
  }

}
