import { NotificationRepository } from 'src/@repositories/notification-repository'
import { Notification } from '../../src/@entities/notification'

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = []

  async create(notification: Notification) {
    this.notifications.push(notification)
  }
}
