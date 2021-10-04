import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
	@Input() rating: number = 0;
	cropWidth: number = 75;

	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
	onClick(): void {
		this.ratingClicked.emit(`${this.rating}`);
		console.log('clicked');
	}
	
	ngOnChanges(): void{
		this.cropWidth = this.rating * 75 / 5;
	}
}