import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{
  img =[
    'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
    'https://img.emg-services.net/HtmlPages/HtmlPage13032/940-header.jpg',
    'https://pbs.twimg.com/media/Fm2CkOsWYAEV_kp.jpg'
  ]
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? (this.img.length - 1) : (this.currentSlide - 1);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide === this.img.length - 1) ? 0 : (this.currentSlide + 1);
  }


  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  sliderConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true
  };

}
