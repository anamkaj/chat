import { IsString } from 'class-validator'

export class UserDto {
  @IsString()
  name: string
  // @IsString()
  // password: string
  // @IsString()
  // email: string
  @IsString()
  tel: string
}
