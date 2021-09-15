import { Component, NgZone } from '@angular/core';
import { DemoSharedTypeormCompat } from '@demo/shared';
import { } from '@pekevski/typeorm-compat';

@Component({
	selector: 'demo-typeorm-compat',
	templateUrl: 'typeorm-compat.component.html',
})
export class TypeormCompatComponent {
  
  demoShared: DemoSharedTypeormCompat;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTypeormCompat();
  }

}