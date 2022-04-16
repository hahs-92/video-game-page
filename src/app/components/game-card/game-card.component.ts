import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//models
import { Game } from 'src/models';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openGameDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

}
