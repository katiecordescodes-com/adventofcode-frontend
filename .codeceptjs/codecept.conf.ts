import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: '**/*.spec.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://adventofcode.katiecordescodes.docker',
      show: false,
      browser: 'firefox'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'app',
  fullPromiseBased: true,
  "multiple": {
    "chromium": {
      "browsers": ["chromium"]
    },
    "firefox": {
      "browsers": ["firefox"]
    },
    "parallel": {
      "chunks": 2,
      "browsers": ["chromium", "firefox"]
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/landingpage_steps.ts',
    ]
  },
}
