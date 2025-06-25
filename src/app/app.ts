import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  constructor (private Title: Title) { }

  ngOnInit(): void {
    this.Title.setTitle("Studio MAX")
  }

}
