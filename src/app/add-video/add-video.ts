import { Component, HostListener, ViewChild } from '@angular/core';
import { VideoService } from '../types/video';
import { InfoFileEntry } from '../types/info-file';

@Component({
  selector: 'app-add-video',
  imports: [],
  templateUrl: './add-video.html',
  styleUrl: './add-video.css'
})
export class AddVideo {
  
  @ViewChild("finput")
  finput!: HTMLInputElement;
  
  constructor(
    private service: VideoService
  ) {
    
  }

  public preventDef(ev: DragEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    
  }

  openFD() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = this.finputChange.bind(this);
    input.click();
  }
  
  @HostListener('window:drop', ['$event'])
  public dragstart($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    debugger;
    if ($event.dataTransfer?.files == null || $event.dataTransfer?.files.length == 0) {
      alert("В добавляемых данных нет файлов");
      return;
    }
    if ($event.dataTransfer?.files.length > 1) {
      alert("Возможно добавлять по 1 файлу");
      return;
    }
    let dt = new DataTransfer();
    dt.items.add($event.dataTransfer.files[0]);
    this.finput.files = dt.files;
    console.log(this.finput.files);
    debugger;
    this.handleFile([...$event.dataTransfer.files]);
  }

  finputChange(ev: Event) {
    const tgt = ev.target as HTMLInputElement;
    if (tgt.files == null || tgt.files.length == 0) {
      alert("В добавляемых данных нет файлов");
      return;
    }
    this.handleFile([...tgt.files])
  }

  handleFile(file: File[]) {
    const type = file[0].type;
    console.log(type);
    if (!['video/mp4', 'video/webm', 'video/ogg'].includes(type.toLowerCase())) {
      alert("Неподдерживаемый тип файла. Используйте 'mp4', 'webm', 'ogg'");
      return;
    }


    if (file[0].size > 1024 * 1024 * 50) {
      alert("Не рекомендуется загружать файлы больше 50МБ");
    }

    const data: InfoFileEntry = {
      description: "",
      type: [],
      video: URL.createObjectURL(file[0])
    };

    this.service
      .addInfo(data)
      .subscribe(_ => alert(`Загрузка ${file[0].name} окончена`));

  }
}
