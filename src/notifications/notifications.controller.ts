import { Body, Controller, Post } from '@nestjs/common'
import { SendNotification } from 'src/@use-cases/send-notification'
import { NotificationViewModel } from './notification-view-models'
import { CreateNotificationsBody } from './notifications-dto'

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { notification } = await this.sendNotification.execute(body)

    return { notification: NotificationViewModel.toResponse(notification) }
  }
}
