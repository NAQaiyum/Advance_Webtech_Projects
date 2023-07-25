import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
import {IsEmail} from 'class-validator';

@Entity("admin1")

	export class AdminEntity{
		@Column()
		@PrimaryGeneratedColumn()
		id:number;

		@Column()
		name:string;

		@Column()
		@IsEmail()
		email:string;

		@Column()
		password:string;

		@Column()
		contact:number;

		@Column()
		gender:string;


        // @Column
		// image:string;


	}