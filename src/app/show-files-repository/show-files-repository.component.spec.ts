import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilesRepositoryComponent } from './show-files-repository.component';

describe('ShowFilesRepositoryComponent', () => {
  let component: ShowFilesRepositoryComponent;
  let fixture: ComponentFixture<ShowFilesRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFilesRepositoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFilesRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
