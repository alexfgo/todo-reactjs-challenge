export class Task {
  id: string;
  content: string;
  done: boolean;

  constructor(id: string, content: string, done: boolean) {
    this.id = id;
    this.content = content;
    this.done = done;
  }
}
