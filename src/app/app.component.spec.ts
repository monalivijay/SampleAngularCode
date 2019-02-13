/* import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de: DebugElement;
    let el: HTMLElement;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('form'));
            el = de.nativeElement;
        });
    }));

    it(`should have as text 'Login page'`, async(() => {
        expect(comp.text).toEqual('Login page');
    }));

    it(`should set submitted to true`, async(() => {
        comp.onSubmit();
        expect(comp.submitted).toBeTruthy();
    }));

    it(`should call the onSubmit method`, async(() => {
        fixture.detectChanges();
        spyOn(comp, 'onSubmit');
        el = fixture.debugElement.query(By.css('button')).nativeElement;
        el.click();
        expect(comp.onSubmit).toHaveBeenCalledTimes(0);
    }));

    it(`form should be invalid`, async(() => {
        comp.contactForm.controls['email'].setValue('');
        comp.contactForm.controls['name'].setValue('');
        comp.contactForm.controls['text'].setValue('');
        expect(comp.contactForm.valid).toBeFalsy();

    }));
    it(`form should be vald`, async(() => {
        comp.contactForm.controls['email'].setValue('asd@asd.com');
        comp.contactForm.controls['name'].setValue('aada');
        comp.contactForm.controls['text'].setValue('text');
        expect(comp.contactForm.valid).toBeTruthy();

    }));

});
 */