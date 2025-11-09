import { UserRole } from '../schemas/user.schema';

export class CreateUserDto {
  nama: string;
  nim: string;
  password: string; 
  role: UserRole;
}