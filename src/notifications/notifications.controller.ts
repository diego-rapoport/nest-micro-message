import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { CancelNotification } from '@use-cases/cancel-notification'
import { CountRecipientNotification } from '@use-cases/count-recipient-notifications'
import { GetRecipientNotifications } from '@use-cases/get-recipient-notifications'
import { ReadNotification } from '@use-cases/read-notification'
import { UnreadNotification } from '@use-cases/unread-notification'
import { SendNotification } from 'src/@use-cases/send-notification'
import { NotificationViewModel } from './notification-view-models'
import { CreateNotificationsBody } from './notifications-dto'

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private getRecipientNotification: GetRecipientNotifications,
    private countRecipientNotifications: CountRecipientNotification,
  ) {}

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId: recipientId,
    })
    return {
      notifications: notifications.map(NotificationViewModel.toResponse),
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    })
  }

  @Post()
  async create(@Body() body: CreateNotificationsBody) {
    const { notification } = await this.sendNotification.execute(body)

    return { notification: NotificationViewModel.toResponse(notification) }
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    })
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const count = await this.countRecipientNotifications.execute({
      recipientId: recipientId,
    })

    return count
  }
}
