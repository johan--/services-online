import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routing = Constants.routing;

  constructor() { }

  ngOnInit() {
  }

}
