import { DateUltiService } from './../date-ulti.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUltiService: DateUltiService) { }

  ngOnInit(): void {
  }

  onChange(value) {
    this.output = this.dateUltiService.getDiffToNow(value);
  }

}
