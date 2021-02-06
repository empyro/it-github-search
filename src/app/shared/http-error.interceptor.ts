import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ErrorDialogComponent } from "./component/error-dialog/error-dialog.component";

@Injectable()
export class HttpErrorInterceptor {
  constructor(
    private dialog: MatDialog
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
      return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
              return event;
          }),
          catchError((error: HttpErrorResponse) => {
              this.dialog.open(ErrorDialogComponent, {
                data: error
              })
              return throwError(error);
          }));
  }
}
