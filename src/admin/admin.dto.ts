import{IsNotEmpty,Length,IsEmail} from "class-validator";

export class AdminDto{
	@IsNotEmpty({message:'Name can not be empty!'})
	@Length(5,30)
	name:string;

	@IsEmail()
	email:string;

	@IsNotEmpty({message:'Password can not be empty!'})
	@Length(4,10)
	password:string;

	@IsNotEmpty({message:'Empty!'})
	@Length(6,12)
	contact:number;

	@IsNotEmpty({message:'Empty!'})
	gender:string;

	//image:string;

}