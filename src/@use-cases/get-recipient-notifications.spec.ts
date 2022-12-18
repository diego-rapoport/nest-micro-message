import { makeNotification } from 'src/@factories/notification-factory'
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'
import { GetRecipientNotifications } from './get-recipient-notifications'

describe('Get notifications by recipientId', () => {
  it('should be able to get notifications from a recipientId', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepository,
    )

    await notificationRepository.create(makeNotification())
    await notificationRepository.create(makeNotification())
    await notificationRepository.create(makeNotification())
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    )
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    )

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    })

    expect(notifications).toHaveLength(3)
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    )
  })
})
