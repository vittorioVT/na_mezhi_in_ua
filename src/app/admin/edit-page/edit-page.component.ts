import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postsService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {


    })

  }

}
