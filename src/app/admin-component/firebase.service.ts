import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class FirebaseService{

    constructor(private db: AngularFireDatabase) {}
    workItems: AngularFireList<any>;

    form = new FormGroup({
        $key: new FormControl(null),
        title: new FormControl('', Validators.required),
        address_url: new FormControl('', Validators.required),
        picture: new FormControl('', Validators.required),
        description: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

    getWorks(){
        this.workItems = this.db.list('works');
        return this.workItems.snapshotChanges();
    }
    createWork(item){
        this.workItems.push({
            title: item.title,
            address_url: item.address_url,
            picture: item.picture,
            description: item.description
        })
    }
    editWork(item){
        this.form.setValue(item)
    }
    updateWork(item){
        this.workItems.update(item.key,{
            title: item.title,
            address_url: item.address_url,
            picture: item.picture,
            description: item.description
        })
    }
    deleteWork($key: string){
        this.workItems.remove($key);
    }

}