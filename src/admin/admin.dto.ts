import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class AdminDto{
	@IsNotEmpty()
	
	name:string;

	@IsEmail()
	email:string;

	@IsNotEmpty()
	
	password:string;

	@IsNotEmpty()
	
	contact:number;

	@IsNotEmpty()
	gender:string;

	//image:string;

}