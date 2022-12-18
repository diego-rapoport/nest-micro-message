import { Content } from './content'

describe('Notification content works', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('You received a new request of friendship')

    expect(content).toBeTruthy()
  })
})

describe("Notification content doesn't work", () => {
  it('should not be able to create a notification with less than 5 characters', () => {
    expect(() => new Content('Hi')).toThrowError()
  })

  it('should not be able to create a notification with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrowError()
  })
})
