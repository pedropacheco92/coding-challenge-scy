export class Task {
    id?: string;
    title: string = '';
    description: string = '';
    date: Date = new Date();
    completed: boolean = false;
}
