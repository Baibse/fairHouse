import { Component, OnInit } from '@angular/core';
import { Location } from '../location';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
  
})
export class DetailsComponent implements OnInit {

  constructor() { }
  
  Home:Location[] = [];
  ngOnInit(): void {
  }

}
