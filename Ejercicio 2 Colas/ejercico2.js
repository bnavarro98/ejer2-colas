class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const initialQueue = new Queue();
  initialQueue.enqueue({ user: "User1", ticket: true });
  initialQueue.enqueue({ user: "User2", ticket: true });
  initialQueue.enqueue({ user: "User3", ticket: false });
  initialQueue.enqueue({ user: "User4", ticket: true });
  initialQueue.enqueue({ user: "User5", ticket: false });
  initialQueue.enqueue({ user: "User6", ticket: false });
  initialQueue.enqueue({ user: "User7", ticket: true });
  initialQueue.enqueue({ user: "User8", ticket: true });
  initialQueue.enqueue({ user: "User9", ticket: true });
  initialQueue.enqueue({ user: "User10", ticket: false });
  initialQueue.enqueue({ user: "User11", ticket: true });
  
  const removedUsers = [];
  const finalQueue = new Queue();
  
  while (!initialQueue.isEmpty()) {
    const user = initialQueue.dequeue();
  
    if (user.ticket) {
      finalQueue.enqueue(user);
    } else {
      removedUsers.push(user);
    }
  }
  
  console.log("Cola inicial:", initialQueue.items);
  console.log("Usuarios retirados:", removedUsers);
  console.log("Cola final:", finalQueue.items);
  