import { Taskstep } from './taskstep';

export interface Task {
    id?: string;
    name: string;
    description?: string;
    startdate: Date;
    enddate: Date;
    assignedto?: string;
    taskstatus?: string[];
    taskpriority?: string[];
    tasksteps?: Taskstep[];
    isoverdue?: boolean;
}
