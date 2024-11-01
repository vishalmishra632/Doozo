import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-addmealreview',
  templateUrl: './addmealreview.component.html',
  styleUrls: ['./addmealreview.component.css']
})
export class AddmealreviewComponent implements OnInit {


  ngOnInit() {
  }

  openAddReviewModal() {
    $('#addReviewModal').modal('show');
  }

  closeAddReviewModal() {
    $('#addReviewModal').modal('hide');
  }



}
