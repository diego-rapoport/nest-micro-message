import { randomUUID } from 'crypto'
import { INotification, NProps } from 'src/@interfaces/iNotification'
import { Content } from './content'

export class Notification implements INotification {
  private _id: string
  readonly _props: NProps

  constructor(props: NProps, id?: string) {
    this._id = id ?? randomUUID()
    this._props = { ...props, createdAt: new Date() }
  }

  public get id() {
    return this._id
  }

  public get recipientId() {
    return this._props.recipientId
  }

  public set recipientId(newRecipientId: string) {
    this._props.recipientId = newRecipientId
  }

  public get content() {
    return this._props.content
  }

  public set content(newContent: Content) {
    this._props.content = newContent
  }

  public get category() {
    return this._props.category
  }

  public set category(newCategory: string) {
    this._props.category = newCategory
  }

  public get readAt(): Date | null | undefined {
    return this._props.readAt
  }

  public read() {
    this._props.readAt = new Date()
  }

  public unread() {
    this._props.readAt = null
  }

  public get createdAt() {
    return this._props.createdAt
  }

  public get canceledAt(): Date | null | undefined {
    return this._props.canceledAt
  }

  public cancel() {
    this._props.canceledAt = new Date()
  }
}
