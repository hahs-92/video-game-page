import { Component, Input, OnInit } from '@angular/core';
//models
import { Game } from 'src/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
