import express from "express";
import path from "path";
import http from "http";

const port: number = 3154;

class Demo {
  private server: http.Server
  private port: number

  constructor(port: number) {
    this.port = port
    const app = express();
    app.use(express.static(path.join(__dirname, "../client")));
    app.use('/three.js', express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')));
    app.use('/jsm/controls/OrbitControls', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js')));

    this.server = new http.Server(app);
  }

  Start() {
    this.server.listen(this.port, () => {
      console.log("Server starts");
    })
  }
}

new Demo(port).Start();
