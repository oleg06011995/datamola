import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'season', 'network', 'premiere'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public tableFilter = {
    name: '',
    genre: '',
    premiereYear: null
  };
  public genreList = [];
  public yearList = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = data => this.filterMatch(data);
    this.dataSource.sortingDataAccessor = (item, property) => {
      return property !== 'premiere' ? item[property] : moment(item.premiere).format('x');
    };
    this.fillYearList();
    this.genreList = genres;
  }

  fillYearList(): void {
    const currentYear = new Date().getFullYear();
    for (let i = 1990; i <= currentYear; i++)
      this.yearList.push(i);
  }

  filterChange(event) {
    this.dataSource.filter = event;
  }
  filterMatch(i) {
    let match = true;

    if(this.tableFilter.name && i.name.indexOf(this.tableFilter.name) === -1)
      match = false;

    if(this.tableFilter.genre && i.genres.indexOf(this.tableFilter.genre) === -1)
      match = false;

    if(this.tableFilter.premiereYear && new Date(i.premiere).getFullYear() !== this.tableFilter.premiereYear)
      match = false;

    return match;
  }
}

export interface PeriodicElement {
  name: string;
  season: number;
  network: string;
  premiere: string;
  genres: Array<string>;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
  {name: 'The Terror', season: 3,  network: 'AMC', premiere: '20.10.2019', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 4,  network: 'AMC, Netflix', premiere: '05.11.2019', genres: ['crime', 'tragedy'] },
  {name: 'Preacher', season: 5,  network: 'AMC', premiere: '01.01.2019', genres: ['drama', 'dark comedy'] },
  {name: 'The Terror', season: 2,  network: 'AMC', premiere: '10.01.2018', genres: ['horror', 'drama'] },
  {name: 'Better Call Saul', season: 3,  network: 'AMC, Netflix', premiere: '02.04.2018', genres: ['crime', 'tragedy'] },
];

const genres = ['crime', 'tragedy', 'horror', 'drama', 'dark comedy'];
