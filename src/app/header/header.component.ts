import { Component, OnInit } from '@angular/core';
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faInstagram:IconDefinition = faInstagram;
  menuStatus:boolean = false ;

  constructor() {
  }

  ngOnInit(){
  }

  ChangeStatusMenu(){
    this.menuStatus = !this.menuStatus;
  }

}
