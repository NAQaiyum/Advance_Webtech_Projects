import {Body,Controller,Get,Post,Param,ValidationPipe,ParseIntPipe,UsePipes,Put,Delete,Req,Res,Session,UseGuards} from "@nestjs/common";
import {UserDto} from "src/user/user.dto";
import {UserService} from 'src/user/user.service';
import { SessionGuard } from 'src/guards/session.guards';


@Controller('/user')
export class UserController {
	constructor(private userService:UserService){}

	@Post('/insertuser')
	@UseGuards(SessionGuard)
	@UsePipes(new ValidationPipe())
	insertuser (@Body() userdto:UserDto){
		return this.userService.insertuser(userdto);
	}

	@Get('/getuser/:id')
	@UseGuards(SessionGuard)
	getuser(@Param('id',ParseIntPipe)id:number):any
	{
      return this.userService.getuser(id);
	}
	
	@Delete('/deleteuser/:id')
	@UseGuards(SessionGuard)
	deleteuser(@Param('id',ParseIntPipe)id:number):any
	{
      return this.userService.deleteuser(id);
	}

	@Put('/updateuser/:id')
	@UseGuards(SessionGuard)
	updateuser(@Param('id',ParseIntPipe)
		id:number,@Body('contact') contact:number):any
	{
      return this.userService.updateuser(id,contact);
	}
	
	@Get('/alluser')
	@UseGuards(SessionGuard)
	alluser():any
	{
      return this.userService.alluser();
	}

	



}