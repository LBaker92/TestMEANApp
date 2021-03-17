import { UserConfiguration } from './user-configuration';

export interface User {
  username: string;
  configuration?: UserConfiguration;
}