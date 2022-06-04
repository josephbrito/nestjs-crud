import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const movie = new this.movieModel(createMovieDto);
    await movie.save();
    return movie;
  }

  findAll() {
    return this.movieModel.find();
  }

  findOne(id: string) {
    return this.movieModel.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateMovieDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.movieModel.findByIdAndDelete({ _id: id }).exec();
  }
}
