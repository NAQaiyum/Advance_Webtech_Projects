import { IsNotEmpty } from "class-validator";

export class AdminLoginDto{

    email:string;
    password:string;
    contact:number;
}