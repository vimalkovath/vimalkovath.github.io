import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/providers/posts/post.service';
import { Post } from '../../interfaces/post.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Output() public gridStyle = new EventEmitter;
  public posts: Post[];
  grid=true;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

    // Posts
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data.articles;
        console.log(this.posts);
      },
        console.error,
        () => { });
  }

  public goTo(object: any): void {
    // this.analyticsService.captureCustomEvent(
    //   'navigation',
    //   `Navigate to details page for ${this.type}`,
    //   `${object.name}`,
    //   1);
    // We cannot pass an object directly, only a string
    this.router.navigate(['postdetail', { id: object.id }]);
  }
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    // this.focusedItem = itemHovered;
  }

  public changeStyle(): void {
    this.grid = !this.grid;
    console.log(this.grid, 'this.grid');
    this.gridStyle.emit(this.grid);
  }

}
