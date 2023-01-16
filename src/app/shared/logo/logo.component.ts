import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `<a class="navbar-brand">Materia Weather</a>`,
})
export class LogoComponent {}
