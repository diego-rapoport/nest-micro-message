export class Content {
  private readonly _content: string

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content)
    if (!isContentLengthValid) throw new Error('Content length invalid.')
    this._content = content
  }

  get content() {
    return this._content
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240
  }
}
