import { Component, OnInit } from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


@Component({
  selector: 'app-anim-home',
  templateUrl: './anim-home.component.html',
  styleUrls: ['./anim-home.component.scss']
})
export class AnimHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    let tl = gsap.timeline();

    tl.add(
      gsap.to(".svg-container", {
        scrollTrigger :{
          trigger: ".animHome",
          scrub : true,
          pin :true
        },
        duration: 1,
        scale: 20,
        transformOrigin: "50%, 50%"
      })
    ).add(
      gsap.to(".grid", {
        scrollTrigger :{
          trigger: ".animHome",
          scrub : true,
          pin :true
        },
        duration: 1,
        opacity: 1.2,
      })
    ).add(
      gsap.to("header", {
        scrollTrigger :{
          trigger: ".animHome",
          scrub : true,
          pin :true
        },
        duration: 1,
        opacity: 1.2,
      })
    );

    ScrollTrigger.create({
      animation : tl,
      trigger : ".animHome",
      scrub : true,
      pin :true
    })


  }

}
