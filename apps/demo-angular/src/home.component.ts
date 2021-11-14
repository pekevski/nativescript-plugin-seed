import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'test'
	},
	{
		name: 'typeorm'
	}
];
}