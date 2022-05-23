import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  public departments : any[] = [];
  ngOnInit(): void {
    // this.getAllDepartment();
  }

  // public getAllDepartment() : void{
  //   this.blogService.diplayImages().subscribe(
  //     (response : any[])=> {
  //       this.departments = response;
  //       console.log(response);
  //     },
  //     (error : HttpErrorResponse) =>{
  //       alert(error.message);
  //     }
  //   );
  // }

}
