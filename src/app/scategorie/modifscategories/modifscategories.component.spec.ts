import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifscategoriesComponent } from './modifscategories.component';

describe('ModifscategoriesComponent', () => {
  let component: ModifscategoriesComponent;
  let fixture: ComponentFixture<ModifscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifscategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
