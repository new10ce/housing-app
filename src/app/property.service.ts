import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Property } from "./property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private _url: string = "/assets/data/property.json";

  constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get<Property[]>(this._url);
  }
}
