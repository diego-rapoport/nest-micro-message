import { makeNotification } from 'src/@factories/notification-factory'
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'
import { NotificationNotFoundError } from './errors/notification-404-error'
import { UnreadNotification } from './unread-notification'

describe('Unread a notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const unreadNotification = new UnreadNotification(notificationRepository)

    const notification = makeNotification({ readAt: new Date() })
    await notificationRepository.create(notification)

    await unreadNotification.execute({
      notificationId: notification.id,
    })

    expect(notification.readAt).toBeNull()
  })

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const unreadNotification = new UnreadNotification(notificationRepository)

    expect(async () => {
      return await unreadNotification.execute({
        notificationId: 'fakeID',
      })
    }).rejects.toThrowError(NotificationNotFoundError)
  })
})
