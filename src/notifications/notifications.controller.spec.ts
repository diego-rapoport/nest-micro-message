import { Test, TestingModule } from '@nestjs/testing'
import { NotificationRepository } from '@repositories/notification-repository'
import { PrismaNotificationsRepository } from '@repositories/prisma-notifications-repository'
import { PrismaService } from '@services/prisma.service'
import { SendNotification } from '@use-cases/send-notification'
import { CancelNotification } from '@use-cases/cancel-notification'
import { CountRecipientNotification } from '@use-cases/count-recipient-notifications'
import { GetRecipientNotifications } from '@use-cases/get-recipient-notifications'
import { ReadNotification } from '@use-cases/read-notification'
import { UnreadNotification } from '@use-cases/unread-notification'
import { NotificationsController } from './notifications.controller'

describe('NotificationsController', () => {
  let controller: NotificationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        SendNotification,
        CancelNotification,
        CountRecipientNotification,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
        {
          provide: NotificationRepository,
          useClass: PrismaNotificationsRepository,
        },
      ],
      controllers: [NotificationsController],
    }).compile()

    controller = module.get<NotificationsController>(NotificationsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
