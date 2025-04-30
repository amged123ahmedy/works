import { bootstrapApplication } from '@angular/platform-browser';
import { ProjectComponent } from './app/project/project.component';

bootstrapApplication(ProjectComponent)
  .catch((err) => console.error(err));
