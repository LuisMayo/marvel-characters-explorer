import { Injectable } from '@angular/core';
import { Character } from '../bean/character';
import { GenericResponse } from '../bean/generic-response-types';
import { Serie } from '../bean/serie';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  // Ideally this api key would go in another file, too much hassle for a simple exercice
  apikey = 'b02ce57104c29e93938b68c3e3e4ad7f';
  baseURL = 'https://gateway.marvel.com';
  lastCharacterList: Character[] = [];

  constructor() { }

  async getCharacterList(page = 0): Promise<GenericResponse<Character>> {
    const response = await this.genericCallHandler('v1/public/characters');
    this.lastCharacterList = (response as GenericResponse<Character>).data.results;
    return response;
  }

  // Done locally instead of by API because it excedes the goals of this exercice
  getCharacter(id: string): Character | undefined {
    return this.lastCharacterList.find(character => character.id === +id);
  }

  getSeriesByCharacter(id: string): Promise<GenericResponse<Serie>> {
    return this.genericCallHandler(`/v1/public/characters/${id}/series`);
  }

  async genericCallHandler(path: string, params = new URLSearchParams()): Promise<any> {
    const fullurl = new URL(path, this.baseURL);
    params.set('apikey', this.apikey);
    fullurl.search = params.toString();
    const response = await fetch(fullurl.toString());
    return response.json();
  }
}
