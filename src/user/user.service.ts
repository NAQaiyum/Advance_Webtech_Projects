import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from "src/user/user.entity";
import { UserDto } from "src/user/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo:
    Repository<UserEntity>,){}

  insertuser(mydto:UserDto):any{
    return this.userRepo.save(mydto);
  }


  getuser(id):any{
    return this.userRepo.find({where:{id:id}},)
  }

  deleteuser(id): any {
    return this.userRepo.delete(id);
  }

  async updateuser(id: number, contact: number): Promise<string> {
    const result = await this.userRepo.update(id, { contact});

    if (result.affected > 0) {
      return 'User updated successfully done';
    } else {
      return 'User not found';
    }
  }

  alluser(): any {
    return this.userRepo.find();
  }
}