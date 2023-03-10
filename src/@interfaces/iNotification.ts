import { Content } from 'src/@entities/content'

export type NProps = {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  createdAt?: Date
  canceledAt?: Date | null
}

export interface INotification {
  readonly _props: NProps
}
