import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClankyComponent } from './clanky.component';

describe('ClankyComponent', () => {
  let component: ClankyComponent;
  let fixture: ComponentFixture<ClankyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClankyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClankyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
