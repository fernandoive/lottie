import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: 'lottie-animation-view-demo-app',
  templateUrl: './app.component.html',
}) 

export class AppComponent {
  title = 'test';

  public lottieConfig: Object;
    public anim: any;
    public animationSpeed: number = 1;

    constructor() {
        this.lottieConfig = {
            path: 'assets/location-icon.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }

    handleAnimation(anim: any) {
        this.anim = anim;
    }

    stop() {
        this.anim.stop();
    }

    play() {
        this.anim.play();
    }

    pause() {
        this.anim.pause();
    }

    setSpeed(speed: number) {
        this.animationSpeed = speed;
        this.anim.setSpeed(speed);
    }

}
