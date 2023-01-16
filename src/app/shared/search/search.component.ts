import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: ` <form class="d-flex">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      [formControl]="inputSearch"
    />
  </form>`,
})
export class SearchComponent implements OnInit {
  public inputSearch = new FormControl<string>('', {
    nonNullable: true,
  });

  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((value: string) => value.trim()),
        filter((value: string) => value !== '' && value !== null),
        debounceTime(400),
        distinctUntilChanged(),
        tap((value: string) => this.searchEvent.emit(value))
      )
      .subscribe();
  }
}
