import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getData() {
    return 'Data from server'
  }

  getAboutData() {
    return 'About data from server'
  }

  getAppData() {
    return 'App data from server'
  }
}
