import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoldersRipositoryComponent } from './show-folders-ripository.component';

describe('ShowFoldersRipositoryComponent', () => {
  let component: ShowFoldersRipositoryComponent;
  let fixture: ComponentFixture<ShowFoldersRipositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFoldersRipositoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFoldersRipositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
