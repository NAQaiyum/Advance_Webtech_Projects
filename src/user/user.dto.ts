import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class UserDto{
	@IsNotEmpty({message:'Empty!!!'})
	@Length(5,30)
	name:string;

	@IsNotEmpty({message:'Empty!!!'})
	@Length(4,8)
	password:string;

	@IsNotEmpty({message:'Empty!!!'})
	@Length(6,12)
	contact:number;

	@IsNotEmpty({message:'Empty!!!'})
	type: string;
}