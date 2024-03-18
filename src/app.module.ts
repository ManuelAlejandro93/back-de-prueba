import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [TaskModule, UsuariosModule],
  controllers: [],
  providers: [UsuariosService],
})
export class AppModule {}
