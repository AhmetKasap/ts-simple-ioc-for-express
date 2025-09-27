import express from "express";
import { createServer, Server } from "http";
import type { Express } from "express";


class App {
  private app : Express;
  private httpServer: Server;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);   
  }
  async start() {
    this.httpServer.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  }
}


export default App;