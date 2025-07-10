@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: '1',
        title: 'Sample Task',
        description: 'Test description',
        priority: 'Medium',
        status: 'To Do',
        dueDate: '2025-08-15T00:00:00Z',
        createdAt: new Date().toISOString(),
      }
    ];
    return { tasks };
  }
}
