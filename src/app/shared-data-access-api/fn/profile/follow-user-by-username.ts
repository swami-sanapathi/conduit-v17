/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RequestBuilder } from '../../request-builder';
import { StrictHttpResponse } from '../../strict-http-response';

import { Profile } from '../../models/profile';

export interface FollowUserByUsername$Params {
    /**
     * Username of the profile you want to follow
     */
    username: string;
}

export function followUserByUsername(
    http: HttpClient,
    rootUrl: string,
    params: FollowUserByUsername$Params,
    context?: HttpContext
): Observable<
    StrictHttpResponse<{
        profile: Profile;
    }>
> {
    const rb = new RequestBuilder(rootUrl, followUserByUsername.PATH, 'post');
    if (params) {
        rb.path('username', params.username, {});
    }

    return http.request(rb.build({ responseType: 'json', accept: 'application/json', context })).pipe(
        filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
            return r as StrictHttpResponse<{
                profile: Profile;
            }>;
        })
    );
}

followUserByUsername.PATH = '/profiles/{username}/follow';
