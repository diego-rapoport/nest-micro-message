import { Notification } from 'src/@entities/notification'

export class NotificationViewModel {
  static toResponse(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.content,
      category: notification.category,
      recipientId: notification.recipientId,
    }
  }
}
