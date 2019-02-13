import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgAddToCalendarModule } from '@trademe/ng-add-to-calendar';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        NgAddToCalendarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
