import { describe, it, expect, jest, afterEach } from '@jest/globals'
import { log } from '../src'

describe('log test suite', () => {
  afterEach(() => {
    jest.resetAllMocks()
    jest.clearAllMocks()
  })

  it('should log an value', () => {
    const logSpy = jest.spyOn(console, 'log')
    logSpy.mockImplementation(() => {})

    const stringToLog = 'my name is Bond... James bond'

    log(stringToLog)

    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(stringToLog)
  })

  it('should log two values', () => {
    const logSpy = jest.spyOn(console, 'log')
    logSpy.mockImplementation(() => {})

    const stringToLog_1 = 'my name is Bond...'
    const stringToLog_2 = 'James Bond'

    log(stringToLog_1, stringToLog_2)

    expect(logSpy).toHaveBeenCalledTimes(1)
    expect(logSpy).toHaveBeenCalledWith(stringToLog_1, stringToLog_2)
  })
})
