import { Taskstep } from './taskstep';

export interface Task {
    name: string;
    startdate: Date;
    enddate: Date;
    tasksteps?: Taskstep[];
}
