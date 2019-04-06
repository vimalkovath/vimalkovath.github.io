import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { DiplomaService } from './diploma/diploma.service';
import { HobbyService } from './hobby/hobby.service';
import { ProjectService } from './project/project.service';
import { RoleService } from './role/role.service';
import { SkillService } from './skill/skill.service';
import { ToolService } from './tool/tool.service';
import { CodeschoolService } from './codeschool/codeschool.service';
import { ModalService } from './modal/modal.service';
import { ResolveByIdService } from './resolve-by-id/resolve-by-id.service';
import { CookieService } from './cookie/cookie.service';
import { HeaderTitleService } from './header-title/header-title.service';
import { RouteScrollService } from './route-scroll/route-scroll.service';
import { GAnalyticsService } from './g-analytics/g-analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ProjectService,
    SkillService,
    RoleService,
    DiplomaService,
    ToolService,
    HobbyService,
    CodeschoolService,
    ModalService,
    ResolveByIdService,
    CookieService,
    HeaderTitleService,
    RouteScrollService,
    GAnalyticsService
  ],
  declarations: []
})
export class ProvidersModule { }
