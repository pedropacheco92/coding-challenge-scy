export class Task {
    _id?: string;
    title: string = '';
    description: string = '';
    date: Date = new Date();
    completed: boolean = false;
}
