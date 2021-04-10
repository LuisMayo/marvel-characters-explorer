import { Injectable } from '@angular/core';
import { CharactersResponse } from '../bean/characters-response';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  apikey = 'b02ce57104c29e93938b68c3e3e4ad7f';
  baseURL = 'https://gateway.marvel.com';

  constructor() { }

  getCharacterList(page = 0): Promise<CharactersResponse> {
    return this.genericCallHandler('v1/public/characters');
  }

  async genericCallHandler(path: string, params = new URLSearchParams()): Promise<any> {
    const fullurl = new URL(path, this.baseURL);
    params.set('apikey', this.apikey);
    fullurl.search = params.toString();
    const response = await fetch(fullurl.toString());
    return response.json();
  }
}
