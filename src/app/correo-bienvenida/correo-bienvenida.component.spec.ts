import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoBienvenidaComponent } from './correo-bienvenida.component';

describe('CorreoBienvenidaComponent', () => {
  let component: CorreoBienvenidaComponent;
  let fixture: ComponentFixture<CorreoBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorreoBienvenidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorreoBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
