import {Component, Input} from '@angular/core';

export class SearchResult {
    public id: string;
    public title: string;
    public description: string;
    public thumbnailUrl: string;
    public videoUrl: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.thumbnailUrl || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}

@Component({
    selector: 'search-result',
    templateUrl: 'search-result.html',
})
export class SearchResultComponent {
    @Input() public result: SearchResult;
}
