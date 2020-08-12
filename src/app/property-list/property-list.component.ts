import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public properties: Property[] = [];

  constructor(private service:  PropertyService) { }

  ngOnInit(): void {
    this.service.getAllProperties().subscribe(data => {
      this.properties = data;
      console.log(this.properties);
    }, error => {
      console.log("error");
    })
  }
}
