import { Component } from '@angular/core';

import {
  CfAppAutoscalerEventsConfigService,
} from '../../../shared/components/list/list-types/app-autoscaler-event/cf-app-autoscaler-events-config.service';
import { ListConfig } from '../../../shared/components/list/list.component.types';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-autoscaler-scale-history-page',
  templateUrl: './autoscaler-scale-history-page.component.html',
  styleUrls: ['./autoscaler-scale-history-page.component.scss'],
  providers: [{
    provide: ListConfig,
    useClass: CfAppAutoscalerEventsConfigService,
  }]
})
export class AutoscalerScaleHistoryPageComponent {

  parentUrl = `/applications/${this.applicationService.cfGuid}/${this.applicationService.appGuid}/auto-scaler`;

  constructor(
    public applicationService: ApplicationService,
  ) {
  }
}
