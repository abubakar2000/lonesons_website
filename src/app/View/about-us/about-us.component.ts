import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public team:any[] = [
    {
      name:'Nadeem Khalid Lone',
      designation:'CEO',
      email:'abubakarmughal2k@gmail.com',
      image:'assets/img/gallery/team1.png',
    },
    {
      name:'Zain Nadeem Lone',
      designation:'Operations',
      email:'',
      image:'assets/img/gallery/team3.png',
    },
    {
      name:'Jawad Ali',
      designation:'Air Freight Manager',
      email:'',
      image:'assets/img/gallery/team2.png',
    },
    {
      name:'Amer Fareed',
      designation:'International Business Management',
      email:'',
      image:'assets/img/gallery/team3.png',
    },
    {
      name:'Danial Nadeem Lone',
      designation:'Sea Freight Management',
      email:'',
      image:'assets/img/gallery/team1.png',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      behavior: 'smooth',
      top: window.innerHeight - 250,
      left: 0
    })
  }
}
