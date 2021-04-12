import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/bean/character';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  charList: Character[] = [];
  nameStart = '';

  constructor(private marvelServ: MarvelService) { }

  ngOnInit(): void {
    this.marvelServ.getCharacterList().then(info => {
      this.charList = info.data.results;
    });
  }

  search(): void {
    this.marvelServ.getCharacterList(this.nameStart).then(info => {
      this.charList = info.data.results;
    });
  }
}
