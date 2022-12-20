import { reporters } from 'mocha'

export class CypressTestRailReporter extends reporters.Spec {
  constructor(runner, options) {
    super(runner)

    this.reporterOptions = options.reporterOptions

    if (reporterOptions.TESTRAIL_HOST) {
      process.env.TESTRAIL_HOST = this.reporterOptions.TESTRAIL_HOST
    }

    if (reporterOptions.TESTRAIL_USERNAME) {
      process.env.TESTRAIL_USERNAME = this.reporterOptions.TESTRAIL_USERNAME
    }

    if (reporterOptions.TESTRAIL_PASSWORD) {
      process.env.TESTRAIL_PASSWORD = this.reporterOptions.TESTRAIL_PASSWORD
    }

    if (reporterOptions.TESTRAIL_PROJECTID) {
      process.env.TESTRAIL_PROJECTID = this.reporterOptions.TESTRAIL_PROJECTID
    }

    if (reporterOptions.TESTRAIL_SUITEID) {
      process.env.TESTRAIL_SUITEID = this.reporterOptions.TESTRAIL_SUITEID
    }

    if (reporterOptions.name) {
      process.env.TESTRAIL_RUN_NAME = this.reporterOptions.name
    }
  }
}
