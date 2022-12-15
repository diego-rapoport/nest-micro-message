import { Module } from '@nestjs/common'
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
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
})
export class AppModule {}
