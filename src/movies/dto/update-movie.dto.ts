import { CreateMovieDto } from './create-movie.dto';
import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
