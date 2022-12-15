import { Injectable } from '@nestjs/common'
import { Notification } from 'src/@entities/notification'
import { PrismaService } from 'src/@services/prisma.service'
import { NotificationRepository } from './notification-repository'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.content,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    })
  }
}
