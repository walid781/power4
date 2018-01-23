import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoradComponent } from './game-borad.component';

describe('GameBoradComponent', () => {
  let component: GameBoradComponent;
  let fixture: ComponentFixture<GameBoradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
