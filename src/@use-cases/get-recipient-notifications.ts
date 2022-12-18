import {
  IGetRecipientNotificationsRequest,
  IGetRecipientNotificationsResponse,
} from '@interfaces/iGetRecipientNotifications'
import { Injectable } from '@nestjs/common'
import { NotificationRepository } from '@repositories/notification-repository'

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: IGetRecipientNotificationsRequest,
  ): Promise<IGetRecipientNotificationsResponse> {
    const { recipientId } = request

    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId)

    return {
      notifications,
    }
  }
}
