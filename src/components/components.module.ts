import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteComponent } from './favorite/favorite';
import { AdministratorComponent } from './administrator/administrator';
import { NonAdminComponent } from './non-admin/non-admin';
import { ArchivedComponent } from './archived/archived';
import { UserItemComponent } from './user-item/user-item';

@NgModule({
	declarations: [UserListComponent,
    FavoriteComponent,
    AdministratorComponent,
    NonAdminComponent,
    ArchivedComponent,
    UserItemComponent],
	imports: [
		IonicPageModule.forChild(UserListComponent)
	],
	exports: [UserListComponent,
    FavoriteComponent,
    AdministratorComponent,
    NonAdminComponent,
    ArchivedComponent,
    UserItemComponent]
})
export class ComponentsModule {}
