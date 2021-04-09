import { Injectable } from '@angular/core';
import { CharactersResponse } from '../bean/characters-response';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  apikey = 'b02ce57104c29e93938b68c3e3e4ad7f';

  constructor() { }

  async getCharacterList(page = 0): Promise<CharactersResponse> {
    const response = await fetch('https://gateway.marvel.com/v1/public/characters?apikey=' + this.apikey);
    return response.json();
  }
}
