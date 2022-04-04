import { Component, OnInit } from '@angular/core';
import {RealisasionsService} from "../services/realisasions.service";

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {

  posters:any;

  constructor(private realisations:RealisasionsService) {

    this.posters = this.realisations.Realisasions.posters

  }

  ngOnInit(): void {
  }

}
