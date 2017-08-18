import { Component, OnInit } from '@angular/core';
import {Constants} from '../../../constants';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  routing = Constants.routing;
  constructor() { }

  ngOnInit() {
  }

}
