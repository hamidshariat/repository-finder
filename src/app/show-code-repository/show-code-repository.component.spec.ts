import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCodeRepositoryComponent } from './show-code-repository.component';

describe('ShowCodeRepositoryComponent', () => {
  let component: ShowCodeRepositoryComponent;
  let fixture: ComponentFixture<ShowCodeRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCodeRepositoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCodeRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
