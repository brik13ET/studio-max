import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Gallery } from '../gallery/gallery';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { VideoService } from '../types/video';
import { InfoFile } from '../types/info-file';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  imports: [Header, Gallery, Footer],
  templateUrl: './front.html',
  styleUrl: './front.css'
})
export class Front {
  
  @ViewChild(Gallery)
  gallery!: Gallery;
  
  currentVideoType!: number;

  constructor(
    private Title: Title,
    videoService: VideoService,
    private router: Router
  ) {
    videoService.getInfo().subscribe((value: InfoFile) => {
      this.currentVideoType = value.defaultTypeIndex;
    });
  }
  
  ngOnInit(): void {
    this.Title.setTitle("Studio MAX");
  }
  
  currentRol(t: number) {
    this.currentVideoType = t;
  }

}

