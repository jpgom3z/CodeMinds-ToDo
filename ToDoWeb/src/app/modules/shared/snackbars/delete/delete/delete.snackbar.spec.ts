import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSnackbar } from './delete.snackbar';

describe('DeleteSnackbar', () => {
  let component: DeleteSnackbar;
  let fixture: ComponentFixture<DeleteSnackbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteSnackbar]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSnackbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
