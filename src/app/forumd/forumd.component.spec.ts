import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumdComponent } from './forumd.component';

describe('ForumdComponent', () => {
  let component: ForumdComponent;
  let fixture: ComponentFixture<ForumdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
