import { makeNotification } from 'src/@factories/notification-factory'

describe('Notification works', () => {
  it('should be able to create a new notification', () => {
    const notification = makeNotification()

    expect(notification).toBeTruthy()
  })
})
