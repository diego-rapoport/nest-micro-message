import { Test, TestingModule } from '@nestjs/testing'
import { NotificationRepository } from 'src/@repositories/notification-repository'
import { PrismaNotificationsRepository } from 'src/@repositories/prisma-notifications-repository'
import { PrismaService } from 'src/@services/prisma.service'
import { SendNotification } from 'src/@use-cases/send-notification'
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
