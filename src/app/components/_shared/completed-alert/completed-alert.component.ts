import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-completed-alert",
	templateUrl: "./completed-alert.component.html",
	styleUrls: ["./completed-alert.component.scss"]
})
export class CompletedAlertComponent {
	@Input() alertShowing: boolean;
	@Output() alertDismissEvent = new EventEmitter<boolean>();

	onCloseAlert() {
		this.alertDismissEvent.emit(false);
	}
}
