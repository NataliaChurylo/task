import { ITask } from './task-list.interface';

export class Task implements ITask{
    constructor(
        public id:number,
        public name:string,
        public taskCheck:boolean
    ){}
}