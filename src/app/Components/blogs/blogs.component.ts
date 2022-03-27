import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  @Input('length') length: number = -1;
  public newsandevents: any[] = [
    {
      title: 'Event 1',
      desc: 'Event description',
      image: '',
    },
    {
      title: 'Event 2',
      desc: 'Event description',
      image: '',
    },
    {
      title: 'Event 3',
      desc: 'Event description',
      image: '',
    },
    {
      title: 'Event 3',
      desc: 'Event description',
      image: '',
    },
    {
      title: 'Event 3',
      desc: 'Event description',
      image: '',
    },
    {
      title: 'Event 3',
      desc: 'Event description',
      image: '',
    },
  ]
  constructor() { }

  ngOnInit(): void {
    if (this.length != -1) {
      this.newsandevents = this.newsandevents.slice(0, this.length);
    }
  }

}
