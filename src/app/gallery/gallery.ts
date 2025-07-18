import { Component, Input } from '@angular/core';
import { InfoFile, InfoFileEntry } from '../types/info-file';
import { VideoService } from '../types/video';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {

  private _currentVideoType!: number;

  @Input()
  set currentVideoType(value: number) {
    this._currentVideoType = value;
    if (!this.data) return
    this.videos = this.data?.videos.filter(ent => ent.type.includes(this.currentVideoType), this).slice(0, 8);
  }

  get currentVideoType() {
    return this._currentVideoType;
  }

  data!: InfoFile;

  videos: InfoFileEntry[] = [];

  private get videoDivs()
  {
    return [...document.getElementsByTagName('video')];
  }
  
  public  constructor(private videoService: VideoService) {

    this.videoService.getInfo().subscribe(
      (value: InfoFile) => {
        this.data = value;
        this.currentVideoType = this._currentVideoType;
      }
    );
  }
  
  public  stopvideo(index: number) {
    const vid = this.videoDivs[index];
    if (!vid)
      return
    vid.pause();
    vid.currentTime = 0;
    vid.volume = 0;
  }
  public  playvideo(index: number) {
    const vid = this.videoDivs[index];
    if (!vid)
      return;
    vid.play();
    vid.loop = true;
  }
  public unmute(index: number) {
    const vid = this.videoDivs[index];
    if (!vid)
      return;
    vid.volume = 1;
  }
}
