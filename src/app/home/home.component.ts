import { Component } from '@angular/core';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    gsap.to(' .watermelon, .burger, .almond', {
      duration: 2,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 0, y: 20 }
        ],
        autoRotate: false,
      },
      ease: "power1.inOut",
      repeat: -1, // Infinite loop
      yoyo: true  // Go back and forth
    });

    gsap.to('.motto', {
      duration: 2,
      text: "Social footprint at work",
      ease: "none",
    });
  }

  brands() {
    window.location.href = "https://www.canva.com/design/DAGTp5oCwVE/bZ0xpc7MoFiGOcaHxOpZgw/view?utm_content=DAGTp5oCwVE&utm_campaign=designshare&utm_medium=link&utm_source=editor";
  }
}
