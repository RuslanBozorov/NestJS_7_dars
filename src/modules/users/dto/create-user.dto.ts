import { IsEmail, IsInt, IsString, Min } from "class-validator";
import { Type } from "class-transformer";
import { Role } from "@prisma/client";
import { IsEnum, IsOptional, IsBoolean } from "class-validator";

export class CreateUserDto {
  @IsString()
  fullname: string;

  @IsEmail()
  email: string;

  @IsString()
  contact: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  age: number;

  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
