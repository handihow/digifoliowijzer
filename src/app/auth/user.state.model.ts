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
  componentStep: number;
	createdAt: firebase.firestore.Timestamp;
	updatedAt: firebase.firestore.Timestamp;
  hasAdvancedUI: boolean;
  hasHiddenInfoMessage: boolean;
  ageGroupIsAvailable: {
    fourToSix: boolean,
    sevenToNine: boolean,
    tenToTwelve: boolean
  },
	portfolioRequirements: {
		development: {
			fourToSix: number,
			sevenToNine: number,
			tenToTwelve: number
		},
		evaluation: {
			fourToSix: number,
			sevenToNine: number,
			tenToTwelve: number
		},
		presentation: {
			fourToSix: number,
			sevenToNine: number,
			tenToTwelve: number
		},
	};
  portfolioType: {
    fourToSix: number,
    sevenToNine: number,
    tenToTwelve: number
  };
  childContribution: {
		development: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
		evaluation: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
		presentation: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
	};
  parentContribution: {
		development: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
		evaluation: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
		presentation: {
			fourToSix: boolean,
			sevenToNine: boolean,
			tenToTwelve: boolean
		},
	};
  additionalRequirements: {
    canLoginAtHome: MoSCoWRequirement,
    canBePrinted: MoSCoWRequirement,
    isLinkedToStudentTrackingSystem: MoSCoWRequirement,
    canBeAddedStudentProgramsAndGoals: MoSCoWRequirement,
    studentCanCreatePlanning: MoSCoWRequirement,
    teacherCanSelectGoals: MoSCoWRequirement,
    hasChatFunctionality: MoSCoWRequirement,
    hasGroupOverviewFunctionality: MoSCoWRequirement,
    reportsOfConversationsWithStudentsArePartOfPortfolio: MoSCoWRequirement,
    isCommunicationPlatformWithParents: MoSCoWRequirement,
  };
  canBeUsedOnDevices: string;
  isFinished: boolean;
}
