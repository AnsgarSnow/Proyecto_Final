import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalComponent]
    });
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(PrincipalComponent);
    const principal = fixture.componentInstance;
    expect(principal).toBeTruthy();
  });

  it(`should have the 'Proyectoprincipal' title`, () => {
    const fixture = TestBed.createComponent(PrincipalComponent);
    const principal = fixture.componentInstance;
    expect(principal.title).toEqual('Proyectoprincipal');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PrincipalComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Proyectoprincipal');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
