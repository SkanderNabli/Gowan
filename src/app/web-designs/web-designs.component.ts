import { Component, OnInit } from '@angular/core';
import {RealisasionsService} from "../services/realisasions.service";

@Component({
  selector: 'app-web-designs',
  templateUrl: './web-designs.component.html',
  styleUrls: ['./web-designs.component.scss']
})
export class WebDesignsComponent implements OnInit {

  webdesigns:any;

  constructor(private realisations:RealisasionsService) {

    this.webdesigns = this.realisations.Realisasions.webdesigns

  }

  ngOnInit(): void {
  }

}
