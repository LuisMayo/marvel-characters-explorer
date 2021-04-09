import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/bean/characters-response';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  charList: Character[] = [];

  constructor(private marvelServ: MarvelService) { }

  ngOnInit(): void {
    this.marvelServ.getCharacterList().then(info => {
      this.charList = info.data.results;
    });
  }

}