import { Component, output } from '@angular/core';
import { VideoType } from '../enums/video-type';
import { Section } from '../enums/section';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  rollCallback = output<VideoType>();
  scrollOut = output<Section>();
  
  scrollContact() {
    this.scrollOut.emit(Section.Contacts);
  }
  scrollPortfolio() {
    this.scrollOut.emit(Section.Portfolio);
  }

  public advRoll  (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.Adv);
  }
  
  public imgRoll  (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.Img);
  }
  
  public presRoll (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.Pres);
  }
  
  public g3DRoll  (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.G3D);
  }
  
  public infgRoll (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.Infg);
  }
  
  public cinRoll  (ev: MouseEvent) {
    this.rollCallback.emit(VideoType.Cin);
  }
}