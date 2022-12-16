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
  tableConstructed = false;        
  displayedColumns = ['id', 'name', 'username'];
  
  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  dataSource = new MatTableDataSource<User>();

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
        Object.values(users).forEach((user: User) => {
          this.dataSource.data.push(user);
        });

        this.tableConstructed = true;
        this.cd.detectChanges();
    });
  }

  applyFilter(target: any) {
    let filterValue = target.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
