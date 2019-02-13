
import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() { }
    public alive: boolean = true;

    ngOnInit() {
        Observable.interval(1000).takeWhile(() => this.alive).subscribe(() => this.function());
    }

    ngOnDestroy() {
        this.alive = false;
    }

    public function() {
        console.log("Monali");
    }
}
