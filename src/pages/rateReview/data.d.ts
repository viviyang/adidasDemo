export interface ReviewProp {
    id: string;
    formattedDate: Date;
    customQuestionsOrder: string[];
    customQuestions: string[];
    badges: string[];
    userNickname: string;
    title: string;
    text: string;
    submissionTime: Date;
    responses: string[];
    ratingRange: number;
    rating: number;
    positiveFeedbackCount: number;
    negativeFeedbackCount: number;
    photos: string[];
    locale: string;
}

export interface DataProp {
    totalResults: number;
    reviews: ReviewProp;
}

export interface ReviewQueryParams{
    includeLocales: string;
    limit: number;
    offset: number;
    sort: string;
}