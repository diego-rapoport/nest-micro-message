import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'
import { SendNotification } from './send-notification'

describe('Send a notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const sendNotification = new SendNotification(notificationRepository)

    const { notification } = await sendNotification.execute({
      recipientId: 'abc123',
      content: 'You just dropped the mic',
      category: 'badassness',
    })

    expect(notificationRepository.notifications).toHaveLength(1)
    expect(notificationRepository.notifications[0]).toEqual(notification)
  })
})
