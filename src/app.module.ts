import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot(
      'mongodb+srv://dbUser:{testtt}@nestcrud.jmywhkt.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
