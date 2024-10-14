import { Component } from '@angular/core';
import * as AOS from 'aos';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrl: './influencer.component.css'
})
export class InfluencerComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,    // Whether animation should happen only once
    });

  gsap.to(' .melon, .arrows', {
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

  gsap.to('#scroll-line', {
    scrollTrigger: {
      trigger: '.timeline-container',
      start: 'top center+=200', // Start when the top of the container hits the top of the viewport
      end: 'bottom center-100', // End when the bottom of the container hits the center of the viewport
      scrub: true, // Smoothly links the animation to the scroll position
    },
    height: '100%', // The final height of the line
    duration: 0.2,
    ease: 'none' // Keep the speed constant
  });

}
}
