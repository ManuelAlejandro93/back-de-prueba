import {IsString, MinLength} from "class-validator";

export enum taskStatus{
  PENDING= "PENDING",
  INPROGRESS= "INPROGRESS",
  DONE = "DONE",
}

export class taskEntity {
  id: number;
  tittle: string;
  description: string;
  status: taskStatus;
}