import { Content } from '@entities/content'
import { Notification } from '@entities/notification'
import { NProps } from '@interfaces/iNotification'

type Override = Partial<NProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'recipient-1',
    ...override,
  })
}
