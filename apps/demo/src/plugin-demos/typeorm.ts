import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedTypeorm } from '@demo/shared';
import { } from '@pekevski/typeorm';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTypeorm {
	
}
