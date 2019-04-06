import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/providers/modal/modal.service';
import { ResolveByIdService } from 'src/app/providers/resolve-by-id/resolve-by-id.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap';
import { HeaderTitleService } from 'src/app/providers/header-title/header-title.service';
import { Post } from '../../../interfaces/post.interface';
import { PostService } from 'src/app/providers/posts/post.service';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  @Input() public focusedItem: any;
  private sub: any;
  public id: string;
  public type: string;
  public details: Post;
  public typeModal: string;
  public bsModalRef: BsModalRef;
  public post: Post;
  public posts: Post[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private resolveByIdService: ResolveByIdService,
    private headerTitleService: HeaderTitleService,
    private postService: PostService
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      // this.type = params['type'];
      // this.post = params['obj'];
    });
  }

  ngOnInit() {
    // this.details['image'] = './assets/img/svg/perso/photo.svg';

    // Posts
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data.articles;
        // console.log(this.posts);
        this.details = this.resolveByIdService.resolvePostById(this.id, this.posts);
        this.headerTitleService.setTitle(this.details.title);

      },
        console.error,
        () => { });



  }

  postDetail(id) {
    this.details = this.resolveByIdService.resolvePostById(id, this.posts);
    this.headerTitleService.setTitle(this.details.title);

  }

  /**
 * Open modal for a Post
 * values passed will be used to be resolved in modalService and return the relevant project
 *
 * @param {string} id
 * @param {string} type
 */
  public openProjectModal(id: string, type: string): void {
    this.typeModal = type;
    this.bsModalRef = this.modalService.openModal(id, type);
  }
  public goTo(object: any): void {
    // this.analyticsService.captureCustomEvent(
    //   'navigation',
    //   `Navigate to details page for ${this.type}`,
    //   `${object.name}`,
    //   1);
    // We cannot pass an object directly, only a string
    // this.router.navigate(['postdetail', { id: object.id}]);
    this.postDetail(object.id);
  }
}
