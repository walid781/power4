import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

 

@Injectable()
export class GameDataService {

  private gameArray = new BehaviorSubject<any>(
  [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  );
  public gameData = this.gameArray.asObservable();

  constructor() { }

  updateData(data){
    this.gameArray.next(data);
  }
}
