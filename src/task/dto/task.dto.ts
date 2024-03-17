import {IsString, MinLength} from "class-validator";

export class newTaskDto{
  @IsString()
  @MinLength(10)
  titulo: string;
  descripcion: string;
}

export class newPatchedTaskTitleDto{
  titulo?: string;
}