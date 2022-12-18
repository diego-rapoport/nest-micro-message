import {
  ICountRecipientNotificationResponse,
  ICountRecipientNotificationRequest,
} from '../@interfaces/iCountRecipientNotifications'
import { Injectable } from '@nestjs/common'
import { NotificationRepository } from '@repositories/notification-repository'

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ICountRecipientNotificationRequest,
  ): Promise<ICountRecipientNotificationResponse> {
    const { recipientId } = request

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    )

    return {
      count,
    }
  }
}
