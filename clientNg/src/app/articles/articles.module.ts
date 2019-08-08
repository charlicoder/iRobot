import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatCardModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatFormFieldModule
} from '@angular/material';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


@NgModule({
    declarations: [
        ArticlesComponent,
        ShowArticleComponent,
        AddArticleComponent,
        EditArticleComponent
    ],
    imports: [
        CommonModule,
        ArticlesRoutingModule,
        MatCardModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSortModule,
        MatFormFieldModule
    ]
})
export class ArticlesModule { }
