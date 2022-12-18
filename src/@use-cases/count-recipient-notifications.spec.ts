import { CountRecipientNotification } from '@use-cases/count-recipient-notifications'
import { makeNotification } from 'src/@factories/notification-factory'
import { InMemoryNotificationRepository } from 'test/repositories/in-memory-notifications-repository'

describe('Count notifications', () => {
  it('should be able to count the number of specified recipientId', async () => {
    const notificationRepository = new InMemoryNotificationRepository()
    const countRecipientNotifications = new CountRecipientNotification(
      notificationRepository,
    )

    await notificationRepository.create(makeNotification())

    await notificationRepository.create(makeNotification())

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    )

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    })

    expect(count).toEqual(2)
  })
})
