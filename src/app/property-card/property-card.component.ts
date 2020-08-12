import { Component, Input, OnInit } from '@angular/core';
import { Property } from "../property";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() propertydata: Property;

  constructor() { }

  ngOnInit(): void {
  }

}
