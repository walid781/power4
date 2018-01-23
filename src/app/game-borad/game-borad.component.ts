import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { makeDecorator } from '@angular/core/src/util/decorators';
import { GameDataService } from '../game-data.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

let initialData = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

@Component({
  selector: 'app-game-borad',
  templateUrl: './game-borad.component.html',
  styleUrls: ['./game-borad.component.scss'],
  animations: [
    trigger('gameData',[
      transition('* => *', [
        query('cell', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-100px)', offset: 0}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class GameBoradComponent implements OnInit {

  @Input() cellSize: number;
  
  margeOfCell:  number = 3;
  widthOfGame:  number;
  heightOfGame: number;
  gameData = []
  size42 = Array(42).fill(0);
  current_player = 1;

  constructor(private _data: GameDataService) { }

  ngOnInit() {
    this.gameData = initialData;
    this.current_player = Math.random() > 0.5 ? 1: 2;
    this.widthOfGame  = 7 * this.cellSize + 14 * this.margeOfCell;
    this.heightOfGame = 6 * this.cellSize + 12 * this.margeOfCell;
  }

  trace(message){
    console.log(message);
  }

  intDevision(x: number, y: number){
    return Math.floor(x/y);
  }

  switchPlayer(){
    this.current_player = this.current_player === 1 ? 2: 1;
  }

  playInThisCol(col_index){
    let row_index = 0;
    console.log("trace playInThisCol function xith col_index = ", col_index);
   
    if (this.gameData[row_index][col_index] === 0){
      console.log("toto")
      while(row_index < 6 && this.gameData[row_index][col_index] === 0) { row_index++ ; console.log("toto4")}
      row_index --;
      this.gameData[row_index][col_index] = this.current_player;
      console.log("trece")
      
      console.log("trace playInThisCol function with valye = ");
      console.log(this.gameData[0]);
      console.log(this.gameData[1]);
      console.log(this.gameData[2]);
      console.log(this.gameData[3]);
      console.log(this.gameData[4]);
      console.log(this.gameData[5]);
      // this._data.updateData(this.gameData);
    }

    this.switchPlayer();

    

  }
  newGame(){
    this.gameData = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.current_player = Math.random() > 0.5 ? 1: 2;
  }
}
