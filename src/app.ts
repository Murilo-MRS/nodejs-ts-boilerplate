import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import HandleGlobalError from './Api/Middlewares/HandleError';
import routes from './Api/Routes/index.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.initRoutes();
    this.initializeErrorHandling();
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private initRoutes(): void {
    this.app.use(routes);
  }

  private initializeErrorHandling() {
    this.app.use(HandleGlobalError.execute);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
