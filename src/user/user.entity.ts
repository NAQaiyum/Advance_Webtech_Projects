import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity("user")

	export class UserEntity{
		@Column()
		@PrimaryGeneratedColumn()
		id:number;

		@Column()
		name:string;

		@Column()
		password:string;

		@Column()
		contact:number;

		@Column()
		type:string;

	}