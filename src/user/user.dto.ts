import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class UserDto{
	@IsNotEmpty()
	
	name:string;

	@IsNotEmpty()
	
	password:string;

	@IsNotEmpty()
	
	contact:number;

	@IsNotEmpty()
	type: string;
}