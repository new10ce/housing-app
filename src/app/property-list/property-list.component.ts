import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from '../property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  public property: Property[] = [];

  constructor(private service:  PropertyService) { }

  ngOnInit(): void {
    this.service.getAllProperties().subscribe(data => {
      this.property = data;
      console.log(this.property);
    }, error => {
      console.log("error");
    })
  }
}
