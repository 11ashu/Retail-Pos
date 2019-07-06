import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesComponent } from './countries/countries.component';
import { AddCountryComponent } from './countries/add-country/add-country.component';
import { EditCountryComponent } from './countries/edit-country/edit-country.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { AddBrandComponent } from './brands/add-brand/add-brand.component';
import { EditBrandComponent } from './brands/edit-brand/edit-brand.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component'
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OpeninghoursComponent } from './openinghours/openinghours.component';
import { AddOpeninghoursComponent } from './openinghours/add-openinghours/add-openinghours.component';
import { EditOpeninghoursComponent } from './openinghours/edit-openinghours/edit-openinghours.component';
import { OpeninghoursListComponent } from './openinghours/openinghours-list/openinghours-list.component';
import { RolesComponent } from './roles/roles.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { EditRolesComponent } from './roles/edit-roles/edit-roles.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DashboradComponent, HomeComponent, CategoryComponent, AddCategoryComponent, CategoryListComponent, EditCategoryComponent, CountriesComponent, AddCountryComponent, EditCountryComponent, CountryListComponent, BrandsComponent, BrandListComponent, AddBrandComponent, EditBrandComponent, CustomerComponent, AddCustomerComponent, EditCustomerComponent, CustomerListComponent, OpeninghoursComponent, AddOpeninghoursComponent, EditOpeninghoursComponent, OpeninghoursListComponent, RolesComponent, AddRolesComponent, EditRolesComponent, RolesListComponent]
})
export class DashboardModule { }
