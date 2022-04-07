import { get } from '../../utils/request'
import { stringify } from 'qs';
import { ReviewQueryParams } from './data'

export async function getReview( params: ReviewQueryParams ): Promise< any >{ 
    return get(`/api/models/BTE67/reviews?${stringify(params)}`);
}