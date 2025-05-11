import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilleComponent } from './fille.component';

describe('FilleComponent', () => {
  let component: FilleComponent;
  let fixture: ComponentFixture<FilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
