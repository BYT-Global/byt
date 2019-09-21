import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'byt-my-dash',
    templateUrl: './my-dash.component.html',
    styleUrls: ['./my-dash.component.scss']
})
export class MyDashComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log(true);
    }
}
