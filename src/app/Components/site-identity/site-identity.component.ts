import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-identity',
  templateUrl: './site-identity.component.html',
  styleUrls: ['./site-identity.component.css']
})
export class SiteIdentityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Toggle() {
    if (document.getElementById('aboutSiteDrawe')?.getAttribute('style') !== "transform: translateX(-100%);transition:1s") {
      document.getElementById('aboutSiteDrawe')?.setAttribute('style', "transform: translateX(-100%);transition:1s")
    } else {
      document.getElementById('aboutSiteDrawe')?.setAttribute('style', "transform: translateX(0%);transition:1s")
    }
  }
}
