import { Component, OnInit ,ElementRef,Renderer2,ViewChild, Output, EventEmitter} from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
 
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  @ViewChild('aboutus', { static: true }) aboutus!: ElementRef;
  @ViewChild('navbar-nav') navlist!: ElementRef;
  menuOpen = false;

  @Output() isWebsite = new EventEmitter<boolean>();
  

  constructor(
    private el:ElementRef ,
    private renderer : Renderer2,
    private router:Router
  ) { }
  
  ngOnInit(): void {
  

  }
  scrolltoHome() {
   
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToAboutUs() {
   
    document.getElementById('aboutus')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToServices(){
    document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToTeam(){
    document.getElementById('team')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToGallery(){
    document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToTestimonial(){
    document.getElementById('testimonial')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToBlog(){
    document.getElementById('blog')?.scrollIntoView({behavior: 'smooth'})
  }
  scrollToContact(){
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
  }
   
}
