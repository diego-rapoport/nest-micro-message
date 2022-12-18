import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'
import { CancelNotification } from './cancel-notification'
import { NotificationNotFoundError } from './errors/notification-404-error'
import { makeNotification } from 'src/@factories/notification-factory'

describe('Cancel a notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    const notification = makeNotification()

    await notificationRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    )
  })

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: 'fakeID',
      })
    }).rejects.toThrowError(NotificationNotFoundError)
  })
})
