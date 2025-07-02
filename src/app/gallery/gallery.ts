import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Video } from '../video';
import { InfoFile } from '../info-file';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit{
  
  videos: string[];
  @ViewChildren('video')
  videoDivs!: QueryList<HTMLVideoElement>

  constructor(private videoService: Video) { 
    this.videos = [];
  }

  ngOnInit(): void {
    this.videoService.getInfo().subscribe(
      (value: InfoFile) => {
        const vids = value.videos;
        for (let i = 0; i < vids.length; i++) {
          this.loadVideo(i, vids[i].video);
        }
      }
    )
  }

  public loadVideo(index: number, data: string) {
    var videosArr = this.videos;
    if (videosArr.length < index)
      throw new Error(`No video element with index ${index}`);
    videosArr[index] = data;
  }
}
