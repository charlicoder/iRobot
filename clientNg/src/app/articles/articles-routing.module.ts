import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { ShowArticleComponent } from './components/show-article/show-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';


const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent,
    },
    {
        path: ':id',
        component: ShowArticleComponent,
        data: { title: 'Show Product' }
    },
    {
        path: 'create',
        component: AddArticleComponent,
        data: { title: 'Add Article' }
    },
    {
        path: ':id/edit',
        component: EditArticleComponent,
        data: { title: 'Edit Article' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }
