import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameBoradComponent } from './game-borad/game-borad.component';
import { CellComponent } from './cell/cell.component';
import { GameDataService } from './game-data.service';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameBoradComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
