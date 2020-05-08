import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Post } from '../shared/interfaces';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  searchStr: string = '';

  constructor(private postsService: PostService) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    })
  }

  remove(id: string) {

    return null;
  }


  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  


}
