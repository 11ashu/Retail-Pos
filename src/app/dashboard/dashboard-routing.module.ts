import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { AddCountryComponent } from './countries/add-country/add-country.component';
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { AddBrandComponent } from './brands/add-brand/add-brand.component';
import { EditBrandComponent } from './brands/edit-brand/edit-brand.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { OpeninghoursComponent } from './openinghours/openinghours.component';
import { EditOpeninghoursComponent } from './openinghours/edit-openinghours/edit-openinghours.component';
import { AddOpeninghoursComponent } from './openinghours/add-openinghours/add-openinghours.component';
import { RolesComponent } from './roles/roles.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { OpeninghoursListComponent } from './openinghours/openinghours-list/openinghours-list.component';
const routes: Routes = [
  {
    path: 'Dashboard',
    component: DashboradComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: "full"
      },
      {
        path: 'auth',
        component: HomeComponent
      },
      {
        path: 'category',
        component: CategoryComponent,
        children: [
          {
            path: '',
            component: CategoryListComponent
          },
          {
            path: 'add-category',
            component: AddCategoryComponent
          },
          {
            path: 'edit-category',
            component: EditCategoryComponent
          },
        ]
      },
      {
        path: 'countries',
        component: CountriesComponent,
        children: [{
          path: '',
          component: CountryListComponent
        },
        {
          path: 'add-country',
          component: AddCountryComponent
        },
        {
          path: 'edit-country',
          component: EditCountryComponent
        }
        ]
      },
      {
        path: 'brands',
        component: BrandsComponent,
        children: [{
          path: '',
          component: BrandListComponent
        },
        {
          path: 'add-brands',
          component: AddBrandComponent
        },
        {
          path: 'edit-brands',
          component: EditBrandComponent
        }
        ]
      },
      {
        path: 'cutomer_types',
        component: CustomerComponent,
        children: [{
          path: '',
          component: CustomerListComponent
        },
        {
          path: 'add-cutomer_types',
          component: AddCustomerComponent
        },
        {
          path: 'edit-cutomer_types',
          component: EditCustomerComponent
        }
        ]
      },
      {
        path: 'openinig_hours',
        component: OpeninghoursComponent,
        children: [{
          path: '',
          component: OpeninghoursListComponent
        },
        {
          path: 'add-openinig_hours',
          component: AddOpeninghoursComponent
        },
        {
          path: 'edit-openinig_hours',
          component: EditOpeninghoursComponent
        }
        ]
      },
      {
        path: 'roles',
        component: RolesComponent,
        children: [{
          path: '',
          component: RolesListComponent
        },
        {
          path: 'add-roles',
          component: AddRolesComponent
        },
        {
          path: 'edit-roles',
          component: EditRolesComponent
        }
        ]
      }

    ]
  },
  {
    path: "**",
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
