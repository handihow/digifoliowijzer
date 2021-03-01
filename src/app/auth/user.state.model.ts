import firebase from 'firebase/app';

export enum MoSCoWRequirement {
	'MUST',
	'SHOULD',
  'COULD',
	'WONT'
}

export interface UserState {
	id: string;
	currentPage: string;
  componentStep?: number;
	createdAt: firebase.firestore.Timestamp,
	updatedAt: firebase.firestore.Timestamp,
	portfolioRequirements?: {
		development: {
			fourToSix: MoSCoWRequirement,
			sevenToNine: MoSCoWRequirement,
			tenToTwelve: MoSCoWRequirement
		},
		evaluation: {
			fourToSix: MoSCoWRequirement,
			sevenToNine: MoSCoWRequirement,
			tenToTwelve: MoSCoWRequirement
		},
		presentation: {
			fourToSix: MoSCoWRequirement,
			sevenToNine: MoSCoWRequirement,
			tenToTwelve: MoSCoWRequirement
		},
	}


}
