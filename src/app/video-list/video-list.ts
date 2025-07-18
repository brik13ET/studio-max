import { Component, Input, output, Output } from '@angular/core';
import { InfoFileEntry } from '../types/info-file';
import { EventEmitter } from 'stream';

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

  constructor() { }

  public bubble(ev: MouseEvent): void {
    this.activated.emit(this.info);
  }

}
