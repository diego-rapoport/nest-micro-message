import { Module } from '@nestjs/common'
import { CancelNotification } from '@use-cases/cancel-notification'
import { CountRecipientNotification } from '@use-cases/count-recipient-notifications'
import { GetRecipientNotifications } from '@use-cases/get-recipient-notifications'
import { ReadNotification } from '@use-cases/read-notification'
import { UnreadNotification } from '@use-cases/unread-notification'
import { NotificationRepository } from './@repositories/notification-repository'
import { PrismaNotificationsRepository } from './@repositories/prisma-notifications-repository'
import { PrismaService } from './@services/prisma.service'
import { SendNotification } from './@use-cases/send-notification'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NotificationsController } from './notifications/notifications.controller'

@Module({
  imports: [],
  controllers: [AppController, NotificationsController],
  providers: [
    AppService,
    PrismaService,
    SendNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotifications,
    CancelNotification,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
})
export class AppModule {}
