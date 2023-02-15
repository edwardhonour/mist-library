import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistComponentLibraryComponent } from './mist-component-library.component';

describe('MistComponentLibraryComponent', () => {
  let component: MistComponentLibraryComponent;
  let fixture: ComponentFixture<MistComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistComponentLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
