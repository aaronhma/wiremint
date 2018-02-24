import { Component, OnInit, HostBinding } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { LoginPopupComponent } from "../login-popup/login-popup.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  private dialogisClosed: string = "User Closed Dialog";

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginPopupComponent, {
      width: "250px",
      data: { username: this.username, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.dialogisClosed);
      this.username, this.password = result;
    });
  }
}
