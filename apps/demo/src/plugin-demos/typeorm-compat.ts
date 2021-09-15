import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTypeormCompat } from '@demo/shared';
import { } from '@pekevski/typeorm-compat';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTypeormCompat {
	
}
