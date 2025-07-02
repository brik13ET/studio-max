import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Gallery } from "./gallery/gallery";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Gallery],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {

  constructor(private Title: Title) { }

  @ViewChild(Gallery)
  gallery!: Gallery;

  ngOnInit(): void {
    this.Title.setTitle("Studio MAX");
  }

  ngAfterViewInit(): void {

  }
}
