;
import { Component, inject, input } from '@angular/core';
import { Card } from '../card/card';

@Component({
  imports: [Card],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
}
