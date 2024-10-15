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
      duration: 1000, // Animation duration in milliseconds
      once: true,    // Whether animation should happen only once
    });

  gsap.to('.wave, .mint, .asterisk-1, .asterisk', {
    duration: 1,
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

  gsap.to('.reverse-wave', {
    duration: 1,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 0, y: -20 }
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
    height: '90%', // The final height of the line
    duration: 2,
    ease: 'none' // Keep the speed constant
  });

  gsap.to('.heading-join', {
    duration: 1.5,
    text: "JOIN THE WAITLIST TODAY!",
    ease: "none",
    scrollTrigger: {
      trigger: '.heading-join', // Element to trigger animation
      start: 'top 75%',         // Trigger when .heading-join is 75% from the top of the viewport
      toggleActions: 'play none none none', // Play animation on scroll
    }
  });
  }

  redirect() {
    window.location.href ='https://forms.gle/NzbJKjEqNXQQcumZ8'
  }
}
