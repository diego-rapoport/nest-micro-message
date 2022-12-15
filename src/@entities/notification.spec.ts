import { Content } from './content'
import { Notification } from './notification'

describe('Notification works', () => {
  it('should be able to create a new notification', () => {
    const notification = new Notification({
      content: new Content('You received a new message'),
      category: 'friendship',
      recipientId: 'abc123',
    })

    expect(notification).toBeTruthy()
  })
})
