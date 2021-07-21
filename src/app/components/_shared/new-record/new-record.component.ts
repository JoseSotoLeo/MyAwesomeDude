import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Record } from "src/app/models/Record";
import { RecordsService } from "src/app/services/records-service.service";

@Component({
	selector: "app-new-record",
	templateUrl: "./new-record.component.html",
	styleUrls: ["./new-record.component.scss"]
})
export class NewRecordComponent implements OnInit {
	constructor(private recordsService: RecordsService) {}

	recordForm: FormGroup;
	@Output() finishedTask = new EventEmitter<boolean>();

	ngOnInit(): void {
		this.recordForm = new FormGroup({
			artist: new FormControl(null, Validators.required),
			title: new FormControl(null),
			isrc: new FormControl(null),
			duration: new FormControl(null)
		});
	}

	onSubmit(newRecord: Record) {
		this.recordsService.create(newRecord);
		this.finishedTask.emit(true);
	}
}
