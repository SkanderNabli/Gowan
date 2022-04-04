import {Component, OnInit} from '@angular/core';
import {RealisasionsService} from "../services/realisasions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-identite-visuelles',
  templateUrl: './identite-visuelles.component.html',
  styleUrls: ['./identite-visuelles.component.scss']
})
export class IdentiteVisuellesComponent implements OnInit {

  identiteVisuelles:any;

  constructor(private realisations:RealisasionsService) {

    this.identiteVisuelles = this.realisations.Realisasions.identiteVisuelles

  }

  ngOnInit(): void {

  }

}
