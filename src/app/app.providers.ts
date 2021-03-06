import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { JsonActionService } from './json-action.service';
import { AuthenticationService } from './authentication.service';

import { ShopingControlService } from './shoping-control/shoping-control.service';
import { ShopingControlDetailService } from './shoping-control-detail/shoping-control-detail.service';
import { OrganizationAddService } from './organization-add/organization-add.service';
import { CloudServiceService } from './cloud-service/cloud-service.service';
import { CloudServiceDetailService } from './cloud-service-detail/cloud-service-detail.service';

export const Providers = [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard,
    JsonActionService,
    AuthenticationService,
    ShopingControlService,
    ShopingControlDetailService,
    OrganizationAddService,
    CloudServiceService,
    CloudServiceDetailService
    
]