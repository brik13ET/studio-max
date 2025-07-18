import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { InfoFile } from './info-file';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  public getInfo(): Observable<InfoFile> {
    return this.http.get<InfoFile>(`${environment.apiUrl}/video/info.json`, );
  }
}
