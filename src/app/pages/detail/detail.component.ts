import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/bean/character';
import { Serie } from 'src/app/bean/serie';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  list: Serie[] = [];
  character: Character | undefined;

  constructor(private route: ActivatedRoute, private marvel: MarvelService) { }

  ngOnInit(): void {
    const charID = this.route.snapshot.paramMap.get('id') as string;
    this.marvel.getSeriesByCharacter(charID).then(response => this.list = response.data.results);
    this.character = this.marvel.getCharacter(charID);
  }

}
