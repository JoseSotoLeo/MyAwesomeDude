import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CompletedAlertComponent } from "./completed-alert.component";

describe("CompletedAlertComponent", () => {
	let component: CompletedAlertComponent;
	let fixture: ComponentFixture<CompletedAlertComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CompletedAlertComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CompletedAlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
