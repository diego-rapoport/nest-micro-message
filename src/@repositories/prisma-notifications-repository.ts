import { Injectable } from '@nestjs/common'
import { Notification } from 'src/@entities/notification'
import { PrismaNotificationMapper } from 'src/@mappers/prisma-notification-mapper'
import { PrismaService } from 'src/@services/prisma.service'
import { NotificationRepository } from './notification-repository'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.create({ data: raw })
  }
}
