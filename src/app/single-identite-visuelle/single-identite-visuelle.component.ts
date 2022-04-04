import { Component, OnInit } from '@angular/core';
import {RealisasionsService} from "../services/realisasions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-identite-visuelle',
  templateUrl: './single-identite-visuelle.component.html',
  styleUrls: ['./single-identite-visuelle.component.scss']
})
export class SingleIdentiteVisuelleComponent implements OnInit {

  identiteVisuelleDetails:any;

  constructor(private realisations:RealisasionsService, private route:ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.identiteVisuelleDetails = this.realisations.getIdentiteVisuellesById(+id)

  }

}
