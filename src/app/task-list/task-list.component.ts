import { Component, OnInit } from '@angular/core';
import { ITask } from './task-list.interface';
import { Task } from './task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  count: number;
  taskID:number;
  taskName: string;
  taskRename: string;
  tasksArray:Array<ITask> = [];
  taskCheck:boolean;
  isEdit: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  taskAdd():void{
    let newTask: ITask = new Task (1,this.taskName,this.taskCheck);
    if( this.tasksArray.length > 0 ) {
      newTask.id = this.tasksArray.slice(-1)[0].id +1;
    }
    this.tasksArray.push(newTask);
    this.count = this.tasksArray.length;
    this.taskName = '';
  }

  taskEdit(task:ITask,id:number):void{
    this.isEdit = true;
    this.taskRename = task.name;
    this.taskID = id;
  }

  taskDelete(id:number):void{
    this.tasksArray.splice(id,1);
    this.count--;
    if (this.tasksArray.length == 0) {this.count = null};
  }

  taskSave():void{
    this.isEdit = false;
    this.tasksArray[this.taskID].name = this.taskRename;
  }
}
