import { Notification } from 'src/@entities/notification'
import { NProps } from './inotification'

export interface ISendNotificationRequest
  extends Omit<NProps, 'createdAt' | 'readAt' | 'content'> {
  content: string
}
{
}

export interface ISendNotificationResponse {
  notification: Notification
}
