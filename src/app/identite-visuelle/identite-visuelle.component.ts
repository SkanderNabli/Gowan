import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-identite-visuelle',
  templateUrl: './identite-visuelle.component.html',
  styleUrls: ['./identite-visuelle.component.scss']
})
export class IdentiteVisuelleComponent implements OnInit {

  @Input() identiteVisuelle:any ;

  constructor() { }

  ngOnInit(): void {
  }

}
