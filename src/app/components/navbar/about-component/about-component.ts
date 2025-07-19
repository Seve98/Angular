import { Component } from '@angular/core';
import { CardComponent } from "../../../home/card-component/card-component";

@Component({
  selector: 'app-about-component',
  imports: [CardComponent],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export default class AboutComponent {
  title = 'About Us';
  description = 'This is the about page of our application. Here you can find information about our mission, vision, and team.';

}
