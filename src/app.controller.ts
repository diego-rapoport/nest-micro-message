import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/api/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping(): string {
    return this.appService.pong()
  }
}
