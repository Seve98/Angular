import { Component } from '@angular/core';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
  imports: [CardComponent]
})
export default class HeroComponent {

}
