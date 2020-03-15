import { Component, OnInit } from '@angular/core';
import { AppService, Foo } from '../app.service';

@Component({
  selector: 'app-foo-details',
  providers: [AppService],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {

  public foo = new Foo(1, 'sample foo');
  private foosUrl = 'http://localhost:8082/spring-security-oauth-resource/foos/';

  constructor(private appService: AppService) { }

  getFoo() {
    this.appService.getResource(this.foosUrl + this.foo.id)
      .subscribe(
        data => this.foo = data,
        error => this.foo.name = 'Error'
      );
  }
}
