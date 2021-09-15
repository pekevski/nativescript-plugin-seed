import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TypeormComponent } from './typeorm.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TypeormComponent }])],
  declarations: [TypeormComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TypeormModule {}
