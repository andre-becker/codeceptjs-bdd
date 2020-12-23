/// <reference types='codeceptjs' />
type ghHomePage = typeof import('./acceptance/pages/github/gh-home.page');
type ghSearchPage = typeof import('./acceptance/pages/github/gh-search.page');
type page = typeof import('codeceptjs-configure/lib/helpers/global.page.js');
type Driver_commands = import('/Users/kgajjar/dev/b2c/codeceptjs-bdd/packages/codeceptjs-configure/lib/helpers/driver-commands.helper.js');
type custom_methods = import('/Users/kgajjar/dev/b2c/codeceptjs-bdd/packages/codeceptjs-configure/lib/helpers/custom-methods.helper.js');
type allure_report_helper = import('/Users/kgajjar/dev/b2c/codeceptjs-bdd/packages/codeceptjs-configure/lib/helpers/allure-report.helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, ghHomePage: ghHomePage, ghSearchPage: ghSearchPage, page: page }
  interface Methods extends Driver_commands, custom_methods, allure_report_helper, REST, WebDriver {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
