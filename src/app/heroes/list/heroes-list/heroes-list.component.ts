import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  heroNames: string[] = ['Spiderman', 'Ironman', 'Pepito'];
  deleteHero?:string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
  }
}
