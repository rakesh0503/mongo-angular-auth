import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl='http://localhost:3000/api/events';
  private _specialEventSUrl='http://localhost:3000/api/special';

  constructor(private _http:HttpClient) { }

  getEvent(){
    return this._http.get<any>(this._eventUrl)
  }
  getSpacialEvents(){
    return this._http.get<any>(this._specialEventSUrl)

  }
}
