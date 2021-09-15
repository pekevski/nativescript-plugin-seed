import { Component, NgZone } from '@angular/core';
import { DemoSharedTypeorm } from '@demo/shared';
import { } from '@pekevski/typeorm';

@Component({
	selector: 'demo-typeorm',
	templateUrl: 'typeorm.component.html',
})
export class TypeormComponent {
  
  demoShared: DemoSharedTypeorm;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTypeorm();
  }

}