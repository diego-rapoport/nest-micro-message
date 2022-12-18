import { Test, TestingModule } from '@nestjs/testing'
import { NotificationRepository } from '@repositories/notification-repository'
import { PrismaNotificationsRepository } from '@repositories/prisma-notifications-repository'
import { PrismaService } from '@services/prisma.service'
import { SendNotification } from '@use-cases/send-notification'
import { NotificationsController } from './notifications.controller'

describe('NotificationsController', () => {
  let controller: NotificationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        SendNotification,
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
