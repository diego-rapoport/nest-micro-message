import { Notification } from 'src/@entities/notification'

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>
}
