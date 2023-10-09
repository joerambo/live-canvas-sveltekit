import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm prod',
		port: 8080
	},
	use: {
		screenshot: 'on'
	},
	reporter: [['list'], ['html', { outputFolder: 'tests-report' }]],
	outputDir: 'tests-artifacts',
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
