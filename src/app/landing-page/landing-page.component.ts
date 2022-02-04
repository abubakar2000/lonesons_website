import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private counter: number = 0;
  private images = [1, 2, 3];
  constructor() {
    setInterval(() => {
      this.counter = this.counter >= this.images.length-1 ? 0 : this.counter+1;
      document.getElementById('websiteBanner')?.setAttribute('style', `background-image: url(/assets/bannerImages/bannerImage${this.images[this.counter]}.jpg)`)
    }, 4000);
  }

  ngOnInit(): void {
  }

}
