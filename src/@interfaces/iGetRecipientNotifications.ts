import { Notification } from '@entities/notification'

export interface IGetRecipientNotificationsRequest {
  recipientId: string
}

export interface IGetRecipientNotificationsResponse {
  notifications: Notification[]
}
