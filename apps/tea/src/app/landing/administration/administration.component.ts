import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@tea/api-interfaces';
import { UserService } from '../../common/services/user.service';


@Component({
  selector: 'tea-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  users: User[] = [];
  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator){
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set sort(sort: MatSort){
    this.dataSource.sort = sort;
  }

  dataSource = new MatTableDataSource<User>();
  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef) {
    this.userService.getUsers().subscribe((users) => {
      debugger
      this.dataSource.data = new Array<User>(Object.values(users)[0]);
      this.cd.detectChanges();
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log(users);
    });
  }
}
