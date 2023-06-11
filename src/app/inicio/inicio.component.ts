import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pasantia } from '../Modelos/Pasantia';
import { CurriculumService } from '../Servicios/curriculum/curriculum.service';
import { RegistroPasantiaService } from '../Servicios/registro-pasantia/registro-pasantia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{
  img = [
    'https://www.animafestexperience.net/internshipsabroad/wp-content/uploads/2019/08/ANIMAFEST-PASANTIAS-REMUNERADAS-min-min-800x333.jpg',
    'https://img.emg-services.net/HtmlPages/HtmlPage13032/940-header.jpg',
    'https://pbs.twimg.com/media/Fm2CkOsWYAEV_kp.jpg',
  ];

  pasantias: Pasantia[] = [];

  tipo_usuario = 'GUEST' as string;
  user = { id: 0, correo: '', tipo_usuario: '' };

  menu_usuarios: { [key: string]: { url: string; label?: string }[] } = {
    'SUPER USUARIO': [
      {
        url: '/estudiantes',
        label: 'Estudiantes',
      },
    ],
    ESTUDIANTE: [
      {
        url: '/curriculum',
        label: 'Mi curriculum',
      },
    ],
    EMPRESA: [
      {
        url: '/publicar-pasantia',
        label: 'Agregar pasantía',
      },
    ],
    GUEST: [
      {
        url: '#',
        label: 'Quiénes somos',
      },
      {
        url: '#',
        label: 'Contáctanos',
      },
    ],
  };

  currentSlide = 0;

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.img.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide =
      this.currentSlide === this.img.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
    this.getMenuUsuario();
    this.getListaPasantias();
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      this.user = JSON.parse(storedUsuario);
    }
  }

  sliderConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
  };

  constructor(
    private router: Router,
    private curriculumService: CurriculumService,
    private pasantiaService: RegistroPasantiaService
  ) {
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      this.tipo_usuario = JSON.parse(storedUsuario).tipo_usuario;
      if (this.tipo_usuario == 'ESTUDIANTE') {
        this.curriculumService
          .getCurriculum(JSON.parse(storedUsuario).id)
          .subscribe((data) => {
            if (data.curriculum) {
              this.menu_usuarios[this.tipo_usuario][0].url =
                '/curriculum/' + JSON.parse(storedUsuario).id;
            }
          });
      }
    }
  }

  getListaPasantias() {
    this.pasantiaService.getPasantias().subscribe((response) => {
      this.pasantias = response;
      console.log(response);
      console.log(this.pasantias);
    });
  }

  getMenuUsuario() {
    const storedUsuario = localStorage.getItem('usuario');
    if (storedUsuario) {
      this.tipo_usuario = JSON.parse(storedUsuario).tipo_usuario;
      if (this.tipo_usuario !== 'GUEST') {
        this.menu_usuarios[this.tipo_usuario].push({
          url: 'logout',
          label: 'Cerrar sesión',
        });
      }
    } else {
      this.menu_usuarios[this.tipo_usuario].push({
        url: '/login',
        label: 'Iniciar sesión',
      });
      localStorage.removeItem('usuario');
    }
  }
  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
