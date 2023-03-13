import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [SearchFilterPipe],
  exports: [SearchFilterPipe],
})
export class SharedModule {}
