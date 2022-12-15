import { Injectable } from '@nestjs/common'
import { Content } from 'src/@entities/content'
import { Notification } from 'src/@entities/notification'
import {
  ISendNotificationRequest,
  ISendNotificationResponse,
} from 'src/@interfaces/isendNotificationRequest'
import { NotificationRepository } from 'src/@repositories/notification-repository'

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const newContent = new Content(request.content)
    const newNotification = new Notification({
      ...request,
      content: newContent,
    })

    await this.notificationRepository.create(newNotification)

    return {
      notification: newNotification,
    }
  }
}
