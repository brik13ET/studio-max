import { Component, output } from '@angular/core';
import { VideoType } from '../types/info-file';
import { VideoService } from '../types/video';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  rollCallback = output<number>();
  
  VideoTypes!: VideoType;

  public iterateTypes(): {id: number, name: string}[] {
    let ret: {id: number, name: string}[] = [];
    for ( const e in this.VideoTypes) {
      ret.push({id: parseInt(e), name: this.VideoTypes[e]});
    }
    return ret;
  }

  constructor(service: VideoService) {
    service.getInfo().subscribe(val => {
      this.VideoTypes = val.types;
    });
  }

  public setRoll  (index: number) {
    this.rollCallback.emit(index);
  }
}