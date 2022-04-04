import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.scss']
})
export class WebDesignComponent implements OnInit {

  @Input() webdesign:any

  constructor() { }

  ngOnInit(): void {
  }

}
