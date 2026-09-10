import { LoadingService } from '../../services/loading.service';
import { Component, inject } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-loading',
  styleUrl: './loading.scss',
  templateUrl: './loading.html',
})
export class Loading {
  loadingService = inject(LoadingService);

}
