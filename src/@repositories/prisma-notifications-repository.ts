import { Injectable } from '@nestjs/common'
import { NotificationNotFoundError } from '@use-cases/errors/notification-404-error'
import { Notification } from 'src/@entities/notification'
import { PrismaNotificationMapper } from 'src/@mappers/prisma-notification-mapper'
import { PrismaService } from 'src/@services/prisma.service'
import { NotificationRepository } from './notification-repository'

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: { id: notificationId },
    })

    if (!notification) throw new NotificationNotFoundError()
    return PrismaNotificationMapper.toDomain(notification)
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: { recipientId: recipientId },
    })

    return notifications.map(PrismaNotificationMapper.toDomain)
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: { recipientId: recipientId },
    })

    return count
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.create({ data: raw })
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification)
    await this.prismaService.notification.update({
      where: { id: raw.id },
      data: raw,
    })
  }
}
