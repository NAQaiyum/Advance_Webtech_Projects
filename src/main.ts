// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as session from 'express-session';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   app.use(
//   session({
//     secret: 'my-secret',
//     resave: false,
//     saveUninitialized: false,
//   }),
// );
// await app.listen(3001,()=>{
//   console.log('Your server is running on port:3001');
// });
// }
// bootstrap();




import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import * as session from 'express-session';

import * as cookieParser from 'cookie-parser';

import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface'; // Import CorsOptions




async function bootstrap() {

  const app = await NestFactory.create(AppModule);




  app.use(cookieParser());

  app.use(

    session({

      secret: 'your_secret_key_here', // Replace with your own secret key

      resave: false,

      saveUninitialized: false,

      cookie: { secure: false }, // Set 'secure' to true if using HTTPS

    }),

  );




  const corsOptions: CorsOptions = {

    origin: 'http://localhost:3000', // Replace with your frontend URL

    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

    credentials: true,

  };




  app.enableCors(corsOptions);




  await app.listen(3001,()=>{
  console.log('Your server is running on port:3001');
});
}




bootstrap();