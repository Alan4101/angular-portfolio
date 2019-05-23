import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class SearchService{

    filterCondition(item, searchText){
        return item.title.toLowerCase().indexOf(searchText.toLowerCase()) !=-1;
    }
}