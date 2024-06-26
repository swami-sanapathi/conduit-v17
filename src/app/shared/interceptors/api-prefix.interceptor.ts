import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { URL_TOKEN } from '../../providers/api-url';

export const provideApiPrefix: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    if (!req.url.startsWith('http')) {
        const apiPrefix = inject(URL_TOKEN).url;
        const reqClone = req.clone({ url: `${apiPrefix}${req.url}` });
        return next(reqClone);
    }
    return next(req);
};
