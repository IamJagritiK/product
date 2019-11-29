import { Component, OnInit, OnDestroy} from '@angular/core';
import { Alert } from './classes/alert';
import { AlertService } from './shared/alert.service';
import { LoadingService } from './shared/loading.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 // title = 'volunteer';
  private subscriptions: Subscription[] = [];
  public alerts: Array<Alert> = [];
  public loading = false;


    constructor(
    private alertService: AlertService,
    private loadingService: LoadingService
  ) {}

 ngOnInit() {
    this.subscriptions.push(
      this.alertService.alerts.subscribe(alert => {
        this.alerts.push(alert);
      })
    );
    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading => {
        this.loading = isLoading;
      })
    );

}

ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
