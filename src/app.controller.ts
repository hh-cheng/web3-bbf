import { Controller, Get, Render } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const data = this.appService.getData()
    return { data }
  }

  @Get('about')
  @Render('about')
  about() {
    const data = this.appService.getAboutData()
    return { data }
  }

  @Get('app')
  @Render('app')
  app() {
    const data = this.appService.getAppData()
    return { data: JSON.stringify(data) }
  }
}
