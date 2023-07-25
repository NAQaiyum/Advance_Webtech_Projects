import {Body,Controller,Get,Post,Param,ValidationPipe,ParseIntPipe,UsePipes,Put,Delete,Session,Req,UseGuards,HttpException,HttpStatus} from "@nestjs/common";
import {AdminDto} from "src/admin/admin.dto";
import {AdminLoginDto} from "src/admin/adminlogin.dto";
import {AdminService} from 'src/admin/admin.service';
import {AdminEntity} from "src/admin/admin.entity";
import * as session from 'express-session';
import {Request,Response} from 'express';
import { SessionGuard } from 'src/guards/session.guards';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('/admin')
export class AdminController {
	constructor(private readonly adminService:AdminService){}

	@Post('/insertAdmin')
	@UseGuards(SessionGuard)
	@UsePipes(new ValidationPipe())
	insertAdmin (@Body() admindto:AdminDto){
		return this.adminService.insertAdmin(admindto);
	}

	@Get('/getAdmin/:id')
	@UseGuards(SessionGuard)
	getAdmin(@Param('id',ParseIntPipe)id:number):any
	{
      return this.adminService.getAdmin(id);
	}
	
	@Delete('/deleteAdmin/:id')
	@UseGuards(SessionGuard)
	deleteAdmin(@Param('id',ParseIntPipe)id:number):any
	{
      return this.adminService.deleteAdmin(id);
	}

	@Put('/updateAdmin/:id')
	@UseGuards(SessionGuard)
	updateAdmin(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.adminService.updateAdmin(id,name);
	}
	
	@Get('/allAdmin')
	@UseGuards(SessionGuard)
	allAdmin():any
	{
      return this.adminService.allAdmin();
	}


    @Post('/login')
    async login(@Body()user:AdminLoginDto, @Session() session: Record<string,any>):Promise<any>
    {
    	const admin = await this.adminService.findOneByEmail(user.email);

    	if(admin && admin.password === user.password && admin.contact == user.contact)
    	{
    		session.adminid = admin.id;
    		return 'Login Success' ;
    	}

    	return 'Failed! Please Try Again!' ;
    }



    @Post('/logout')
    @UseGuards(SessionGuard)
    async logout(@Session() session:Record<string,any>){
    	session.destroy();
    	return 'Logout Success' ;
    }


    @Post('/send-email')
    @UseGuards(SessionGuard)
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.adminService.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                return { error: 'Failed to send email.' };
                }
               }

               
}
  





