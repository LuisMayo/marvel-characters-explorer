import { Injectable } from '@angular/core';
import { Character } from '../bean/character';
import { GenericResponse } from '../bean/generic-response-types';
import { Serie } from '../bean/serie';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  apikey = 'b02ce57104c29e93938b68c3e3e4ad7f';
  baseURL = 'https://gateway.marvel.com';

  constructor() { }

  getCharacterList(page = 0): Promise<GenericResponse<Character>> {
    return this.genericCallHandler('v1/public/characters');
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
