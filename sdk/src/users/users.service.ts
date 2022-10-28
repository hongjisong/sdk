import { Injectable } from '@nestjs/common';
import { SCIMUsersShadowUsersApi } from '../../platformAPI';

@Injectable()
export class UsersService {

  private destination = { destinationName: "destination" };

  async getUsers() {
    const users = await SCIMUsersShadowUsersApi.getAllUsersUsingGet().execute(this.destination);
    return users;
  }
}
