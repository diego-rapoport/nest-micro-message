import { makeNotification } from 'src/@factories/notification-factory'
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'
import { NotificationNotFoundError } from './errors/notification-404-error'
import { ReadNotification } from './read-notification'

describe('Read a notification', () => {
  it('should be able to read a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const readNotification = new ReadNotification(notificationRepository)

    const notification = makeNotification()

    await notificationRepository.create(notification)

    await readNotification.execute({
      notificationId: notification.id,
    })

    expect(notification).toHaveProperty('readAt', expect.any(Date))
  })

  it('should not be able to cancel a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const cancelNotification = new ReadNotification(notificationRepository)

    expect(async () => {
      return await cancelNotification.execute({
        notificationId: 'fakeID',
      })
    }).rejects.toThrowError(NotificationNotFoundError)
  })
})
