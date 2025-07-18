import { Component } from '@angular/core';
import { VideoService } from '../types/video';
import { InfoFile, InfoFileEntry } from '../types/info-file';
import { VideoList } from '../video-list/video-list';

@Component({
  selector: 'app-admin',
  imports: [VideoList],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  loadVideo($event: InfoFileEntry) {
    console.log($event);
    this.selected = $event;
  }

  data!: InfoFile;

  selected!: InfoFileEntry;

  constructor(
    private videoService: VideoService
  ) {
    this.videoService.getInfo().subscribe(
      (value: InfoFile) => {
        this.data = value;
      }
    );
  }
}
