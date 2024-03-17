import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from "./task.service";
import { newTaskDto, newPatchedTaskTitleDto } from "./dto/task.dto";

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService){}
  @Get()
  HolaMundo(){
    return this.taskService.getAllTasks()
  }


  @Post()
  HacerUnPost(@Body() newTask:newTaskDto ){
    return this.taskService.postANewTask(newTask.titulo,newTask.descripcion)
  }

  @Delete(':id')
    deleteATask(@Param('id') id:string){
      return this.taskService.deleteATask(id)

      //podría crear un metodo aquí mismo en la clase para buscar en la db.
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() newTittle:newPatchedTaskTitleDto){
      return this.taskService.patchATask(id,newTittle.titulo);
    }

  
}
