import {
  IReadNotificationRequest,
  IReadNotificationResponse,
} from '@interfaces/iReadNotification'
import { Injectable } from '@nestjs/common'
import { NotificationRepository } from '@repositories/notification-repository'
import { NotificationNotFoundError } from './errors/notification-404-error'

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: IReadNotificationRequest,
  ): Promise<IReadNotificationResponse> {
    const { notificationId } = request

    const notification = await this.notificationRepository.findById(
      notificationId,
    )

    if (!notification) throw new NotificationNotFoundError()

    notification.unread()

    await this.notificationRepository.save(notification)
  }
}
