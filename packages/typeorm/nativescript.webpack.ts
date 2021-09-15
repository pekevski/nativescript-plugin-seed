const { ProvidePlugin } = require("webpack");
const fs = require('fs');
const path = require('path');

/**
 * This optionally provides typehints
 * this requires "@nativescript/webpack" to be a dependency (dev)
 *
 * @param {typeof import("@nativescript/webpack")} webpack
 */
module.exports = (webpack) => {
    webpack.chainWebpack(config => {
		
		config.resolve.alias.set("supports-color", "supports-color/browser");
		config.resolve.alias.set("app-root-path", "./shim/app-root-path");
		
		// Add fallbacks for packages that TypeORM requires to work
		// based off webpack v4 fallbacks https://webpack.js.org/configuration/resolve/#resolvefallback
		const fallback = config.resolve.get("fallback");
		config.resolve.set(
			"fallback",
			webpack.Utils.merge(fallback || {}, {
				assert: require.resolve("assert/"),
				buffer: require.resolve("buffer/"),
				events: require.resolve("events/"),
				timers: require.resolve("timers-browserify"),
				tty: require.resolve("tty-browserify"),
				fs: require.resolve("@nativescript/core/"),
				module: require.resolve("@nativescript/core/"),
				path: require.resolve("path-browserify"),
				process: require.resolve('process/browser'),
				os: require.resolve("os-browserify/browser"),
				stream: require.resolve("stream-browserify"),
				util: require.resolve("util/"),
				url: require.resolve('url/')
			})
		);

		config.set("externals", [
			...config.get("externals"),
			"react-native-sqlite-storage",
			"mongodb",
			"@sap/hana-client",
			"hdb-pool",
			"mysql",
			"mysql2",
			"oracledb",
			"pg",
			"pg-native",
			"pg-query-stream",
			"typeorm-aurora-data-api-driver",
			"redis",
			"ioredis",
			"better-sqlite3",
			"sqlite3",
			"sql.js",
			"mssql"
		]);

		config.plugin("ProvidePlugin|Polyfills").use(ProvidePlugin, [
			{ Buffer: [require.resolve("buffer/"), "Buffer"] }
		]);

		config.plugin("DefinePlugin").tap(args => {
			Object.assign(args[0], {
				"process.env.NODE_DEBUG": false,
				"process.platform": JSON.stringify("nativescript"),
				"process.env": "global",
				"process.version": JSON.stringify("0.0.0"),
			});
	 
			return args;
		});
	});    
};
