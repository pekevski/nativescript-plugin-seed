const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'๐ง': {
			script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
				description: ` ๐ป Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` ๐ป Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: 'โ  Clean  ๐งน',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: 'โ  Run iOS  ๏ฃฟ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: 'โ  Run Android  ๐ค',
				},
			},
		},
		'โ๏ธ': {
			script: `npx cowsay "@pekevski/* packages will keep your โ๏ธ cranking"`,
			description: '_____________  @pekevski/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@pekevski': {
			// @pekevski/nativescript-downloader
			'nativescript-downloader': {
				build: {
					script: 'nx run nativescript-downloader:build.all',
					description: '@pekevski/nativescript-downloader: Build',
				},
			},
			// @pekevski/typeorm-compat
			'typeorm-compat': {
				build: {
					script: 'nx run typeorm-compat:build.all',
					description: '@pekevski/typeorm-compat: Build',
				},
			},
			// @pekevski/test
			'test': {
				build: {
					script: 'nx run test:build.all',
					description: '@pekevski/test: Build',
				},
			},
			// @pekevski/typeorm
			'typeorm': {
				build: {
					script: 'nx run typeorm:build.all',
					description: '@pekevski/typeorm: Build',
				},
			},
			// @pekevski/daniel
			'daniel': {
				build: {
					script: 'nx run daniel:build.all',
					description: '@pekevski/daniel: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'โก': {
			script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-downloader': {
				script: 'nx run nativescript-downloader:focus',
				description: 'Focus on @pekevski/nativescript-downloader',
			},
			'typeorm-compat': {
				script: 'nx run typeorm-compat:focus',
				description: 'Focus on @pekevski/typeorm-compat',
			},
			'test': {
				script: 'nx run test:focus',
				description: 'Focus on @pekevski/test',
			},
			'typeorm': {
				script: 'nx run typeorm:focus',
				description: 'Focus on @pekevski/typeorm',
			},
			'daniel': {
				script: 'nx run daniel:focus',
				description: 'Focus on @pekevski/daniel',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
