export class CreateUserDto {
  realname: {type: String, required: true};
  emailaddress: {type: String, required: true};
  username: {type: String, required: false};
  password: {type: String, required: false};
  id: {type: Number, required: false};
}