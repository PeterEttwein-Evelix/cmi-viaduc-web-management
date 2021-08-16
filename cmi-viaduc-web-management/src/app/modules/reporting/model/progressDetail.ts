export interface ProgressDetail {
	detailId: string;
	fileName: string;
	percentage: number;
	page: number;
	totalPages: number;
	lastUpdate: Date;
	startedOn: Date;
	processType: string;
	processState: string;
	completed: boolean;
	failed: boolean;
}
