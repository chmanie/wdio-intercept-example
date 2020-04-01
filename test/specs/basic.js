const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        browser.setupInterceptor()
        browser.expectRequest('GET', /foo/, 404)
        browser.expectRequest('POST', /bar/, 200)
        const title = browser.getTitle()
        const exp = browser.getExpectations()
        browser.resetExpectations()
        const requests = browser.getRequests()
        assert.strictEqual(requests.length, 0)

        assert.strictEqual(title, 'WebdriverIO · Next-gen browser automation test framework for Node.js')
    })
})
