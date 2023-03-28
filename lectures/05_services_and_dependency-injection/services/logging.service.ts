export class LoggingService {

  constructor() { }

  logStatusChanged(status: string) {
    console.log("A server status changed, new status is : " + status);
  }
}
