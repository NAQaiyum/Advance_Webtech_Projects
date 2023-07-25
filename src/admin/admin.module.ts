import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./admin.entity";
import { AdminController } from "src/admin/admin.controller";
import { AdminService } from "src/admin/admin.service";
import { MailerModule } from '@nestjs-modules/mailer'; // Corrected import

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminEntity]),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        ignoreTLS: true,
        secure: true,
        auth: {
          user: 'sellerbuddycc@gmail.com',
          pass: 'yrirwkvmsfqjkqnc',
        },
      }
    })
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
