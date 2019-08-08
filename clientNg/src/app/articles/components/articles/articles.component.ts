import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../interfaces/article';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    displayedColumns: string[] = ['title', 'description', 'updatedAt'];
    data: Article[] = [];
    isLoadingResults = true;
    title = 'List of Articles';

    constructor(private api: ArticlesService) { }

    ngOnInit() {
        this.api.getArticles()
        .subscribe((res: any) => {
            this.data = res;
            console.log(this.data);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }

}
