import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from "src/admin/admin.entity";
import { AdminDto } from "src/admin/admin.dto";
import { AdminLoginDto } from "src/admin/adminlogin.dto";
import { MailerService } from '@nestjs-modules/mailer';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity)
    private adminRepository: Repository<AdminEntity>,
    private mailerService: MailerService, 
  ) {}

  async sendEmail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
    } catch (error) {
      throw new Error('Failed to send email.');
    }
  }

  
  insertAdmin(mydto:AdminDto):any{
    return this.adminRepository.save(mydto);
  }


  getAdmin(id):any{
    return this.adminRepository.find({where:{id:id}})
  }

  findOneByEmail(email: string) {
    return this.adminRepository.findOneBy({ email });
  }

  deleteAdmin(id): any {
    return this.adminRepository.delete(id);
  }

  async updateAdmin(id: number, name: string): Promise<string> {
    const result = await this.adminRepository.update(id, { name});

    if (result.affected > 0) {
      return 'Admin updated successfully done';
    } else {
      return 'Admin not found';
    }
  }

  allAdmin(): any {
    return this.adminRepository.find();
  }


  // async findOneByEmail(email:string):Promise<AdminEntity | undefined> {
  //   return this.adminRepository.findOne({where: {email }});
  // }



  // async hashPassword(password: string): Promise<string> {
  //   const saltOrRounds = 10; 
  //   const hashedPassword = await bcrypt.hash(password, saltOrRounds);
  //   return hashedPassword;
  // }



}
    
    



