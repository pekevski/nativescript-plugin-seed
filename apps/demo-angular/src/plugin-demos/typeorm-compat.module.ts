import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { TypeormCompatComponent } from './typeorm-compat.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: TypeormCompatComponent }])],
  declarations: [TypeormCompatComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class TypeormCompatModule {}
