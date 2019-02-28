import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInfo } from '../../../../../../../../store/src/types/api.types';
import { TableCellAutoscalerEventTypeComponent } from './table-cell-autoscaler-event-type.component';

describe('TableCellAutoscalerEventTypeComponent', () => {
  let component: TableCellAutoscalerEventTypeComponent<EntityInfo>;
  let fixture: ComponentFixture<TableCellAutoscalerEventTypeComponent<EntityInfo>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableCellAutoscalerEventTypeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent<TableCellAutoscalerEventTypeComponent<EntityInfo>>(TableCellAutoscalerEventTypeComponent);
    component = fixture.componentInstance;
    component.row = {
      entity: {
        type: ''
      }
    } as EntityInfo;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
