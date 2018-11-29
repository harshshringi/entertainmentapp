import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTypeControlComponent } from './entity-type-control.component';

describe('EntityTypeControlComponent', () => {
  let component: EntityTypeControlComponent;
  let fixture: ComponentFixture<EntityTypeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTypeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTypeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
