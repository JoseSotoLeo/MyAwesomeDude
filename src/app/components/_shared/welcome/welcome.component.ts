import { AfterViewInit, Component } from "@angular/core";
import { WelcomeAnimation } from "src/app/animations/animations";
@Component({
	selector: "app-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent
	extends WelcomeAnimation
	implements AfterViewInit
{
	ngAfterViewInit(): void {
		// Wrap every letter in a span
		const textWrapper = document.querySelector(".an-1");
		textWrapper.innerHTML = textWrapper.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		);
		this.welcomeAnimation();
	}
}
