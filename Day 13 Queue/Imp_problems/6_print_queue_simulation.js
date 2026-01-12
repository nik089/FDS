class PrintQueue {
  constructor() {
    this.queue = [];
  }

  addJob(job) {
    this.queue.push(job);
  }

  processJob() {
    return this.queue.shift();
  }
}
