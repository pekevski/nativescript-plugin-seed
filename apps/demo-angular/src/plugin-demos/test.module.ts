import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TestComponent } from './test.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TestComponent }])],
  declarations: [TestComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TestModule {}
