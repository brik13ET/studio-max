import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Footer } from "./footer/footer";
import { Gallery } from "./gallery/gallery";
import { Header } from "./header/header";
import { Section } from './enums/section';
import { VideoType } from './enums/video-type';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  
  
  @ViewChild(Gallery)
  gallery!: Gallery;
  
  currentVideoType: VideoType = VideoType.Adv;
  
  constructor(private Title: Title) { }
  
  ngOnInit(): void {
    this.Title.setTitle("Studio MAX");
  }
  
  currentRol(t: VideoType) {
    this.currentVideoType = t;
  }

  public scrollTo(sec: Section) {
    switch(sec) {
      case Section.Contacts: {
        document.getElementById("Contacts")?.scrollIntoView();
        break;
      }
      case Section.Portfolio: {
        document.getElementById("Portfolio")?.scrollIntoView();
        break;
      }
      default: {
        console.error(`sec: ${sec}`);
      }
    }
  }

}
