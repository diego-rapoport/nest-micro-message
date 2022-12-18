import { Injectable } from '@nestjs/common'
import {
  ICancelNotificationRequest,
  ICancelNotificationResponse,
} from 'src/@interfaces/iCancelNotification'
import { NotificationRepository } from 'src/@repositories/notification-repository'
import { NotificationNotFoundError } from './errors/notification-404-error'

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ICancelNotificationRequest,
  ): Promise<ICancelNotificationResponse> {
    const { notificationId } = request

    const notification = await this.notificationRepository.findById(
      notificationId,
    )

    if (!notification) throw new NotificationNotFoundError()

    notification.cancel()

    await this.notificationRepository.save(notification)
  }
}
