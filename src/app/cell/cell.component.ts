import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cellSize: number;
  @Input() margin: number;
  @Input() cellCode: number;
  cellColor: string;
  constructor() { }

  ngOnInit() {
    this.cellColor = this.cellCode === 1 ? 'red': 'white';
    console.log("I am in CellComponent and i have the cellSize: ", this.cellSize);
    console.log("I am in CellComponent and i have the margin: ", this.margin);
    console.log("I am in CellComponent and i have the cellCode: ", this.cellCode);
  }

  getColor(){
    if(this.cellCode === 0)
      return 'white';
    if(this.cellCode === 1)
      return 'red';
    if(this.cellCode === 2)
      return 'yellow';
  }

}
