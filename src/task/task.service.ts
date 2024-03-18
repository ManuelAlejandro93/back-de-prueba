import { Injectable } from '@nestjs/common';
import {taskEntity, taskStatus} from './task.entity';



@Injectable()
export class TaskService {

  private alltasks: taskEntity[] =[{
    id: 1,
    tittle: "Renovación",
    description: "obviamente, comprar cosas en el D1.",
    status: taskStatus.PENDING,
  }]

  getAllTasks(){
    return this.alltasks
  }

  postANewTask(titulo: string, descripcion: string){
    return {
      mensaje: 'la tarea que vas a añadir es estaaaaa.',
      titulo: titulo,
      descripcion: descripcion,
    }
  }
  
  
  deleteATask(id:string){
    return `voy a quitar el elemento con id: ${id}, con procesos propios de eliminación.`
  }


  patchATask(id:string, title:string){
    return `voy a actulizar el elemento con id: ${id}, y titulo "${title}" con procesos propios de actualización.`
  }

  
}
