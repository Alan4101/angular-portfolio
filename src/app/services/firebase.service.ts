import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { Post} from "../post";

@Injectable({
    providedIn: 'root'
})

export class FirebaseService{
    postsRef: AngularFireList<any>;
    postRef: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase) {}

    AddPost(post: Post){
        this.postsRef.push({
            title: post.title,
            url: post.address_url,
            img: post.picture,
            description: post.description
        })
    }
    GetPost($id: string){
        this.postRef = this.db.object('post-list/'+ $id);
        return this.postRef;
    }
    GetPostList(){
        this.postsRef = this.db.list('post-list/');
        return this.postsRef;
    }
    UpdatePost(post: Post){
        this.postRef.update({
            title: post.title,
            url: post.address_url,
            img: post.picture,
            description: post.description
        })
    }
    DeletePost($id: string){
        this.postRef = this.db.object('post-list'+$id);
        this.postRef.remove();
    }
}