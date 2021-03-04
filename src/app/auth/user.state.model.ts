import firebase from 'firebase/app';

export enum MoSCoWRequirement {
	'MUST',
	'SHOULD',
  'COULD',
	'WONT'
}

export enum PortfolioType {
  'PAPER',
  'MIXED',
  'DIGITAL'
}

export interface UserState {
	id: string;
	currentPage: string;
  componentStep: number;
	createdAt: firebase.firestore.Timestamp;
	updatedAt: firebase.firestore.Timestamp;
	portfolioRequirements: {
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
	};
  portfolioType: {
    fourToSix: PortfolioType,
    sevenToNine: PortfolioType,
    tenToTwelve: PortfolioType
  };
  childContribution: {
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
	};
  parentContribution: {
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
