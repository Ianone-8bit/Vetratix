import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    nama:string; 

    @IsNotEmpty()
    @IsString()
    nim:string; 
    
    @IsNotEmpty()
    @IsString()
    @MinLength(6, {message:'Password minimal 6 karakter'})
    password:string; 
}