import {Component, OnInit, HostListener } from '@angular/core';
import { gsap, Power2 } from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {NavigationStart, Router} from "@angular/router";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostListener('document:mousemove', ['$event'])

  onMouseMove(e:MouseEvent) {
    this.parallax(e)
  }

  backgroundPosition:string = "56.085% 74.245%, 33.915% 54.245%";
  route:string = "";

  constructor() {

  }

  parallax(e:MouseEvent) {

      let Width = window.innerWidth/2;
      let Height = window.innerHeight/2;
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let depth1 = `${(50 + (mouseX - Width) * 0.01)-10}% ${50 - (mouseY - Height) * 0.01}%`;
      let depth2 = `${50 - (mouseX - Width) * 0.01}% ${(50 - (mouseY - Height) * 0.01)+20}%`;
      this.backgroundPosition = `${depth2}, ${depth1}`;

      return this.backgroundPosition

    }

    getBackgroundPosition(){
      return this.backgroundPosition
    }

  ngOnInit(): void {

  }

}
