import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'; 
import { UserRole } from 'src/users/schemas/user.schema';




@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private jwtService : JwtService
    ) {} 
    
    async register(registerDto : RegisterDto){
        // cek nim kedaftar 
        const existingUser = await this.usersService.findOneByNim(registerDto.nim); 
        if(existingUser){
            throw new ConflictException('NIM sudah terdaftar');
        } 

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(registerDto.password, salt); 

        // simpen ke db 
        const newUser = await this.usersService.create({
            ...registerDto,
            password : hashedPassword, 
            role : UserRole.USER
        }); 

        // hapus pw dari objek 
        const {password, ...result} = newUser.toObject(); 
        return result;
    } 

    async login(loginDto : LoginDto): Promise<{accessToken:string}> {
        // cari by nim 
        const user = await this.usersService.findOneByNim(loginDto.nim); 
        if(!user)
        {
            throw new UnauthorizedException('NIM atau password salah');
        } 

        // compare password 
        const isPasswordMatch = await bcrypt.compare(
            loginDto.password, 
            user.password,
        ); 
        if(!isPasswordMatch)
        {
            throw new UnauthorizedException('NIM atau password salah');
        }

        // jwt payload 
        const payload = {
            sub:user._id,
            nim : user.nim,
            role:user.role
        }; 
        return{
            accessToken:this.jwtService.sign(payload)
        };
    }
}
