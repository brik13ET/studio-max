import { Component, Input, output, Output } from '@angular/core';
import { InfoFileEntry, VideoType } from '../types/info-file';
import { EventEmitter } from 'stream';
import { VideoService } from '../types/video';

@Component({
  selector: 'app-video-list',
  imports: [],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css'
})
export class VideoList {
  @Input()
  public info!: InfoFileEntry;

  activated = output<InfoFileEntry>();
  
  types!: VideoType;

  constructor(service: VideoService) {
    service.getInfo().subscribe( rxd => {
      this.types = rxd.types
    })
  }

  public bubble(ev: MouseEvent): void {
    this.activated.emit(this.info);
  }

}
