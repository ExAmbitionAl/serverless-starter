import * as headers from '../corsHeaders.json';

export const _200 = (bodyect) => {
    return{
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(body),
    };
}

export const _40x = (body, statusCode) => {
    return{
        statusCode: statusCode,
        headers: headers,
        body: JSON.stringify({body}),
    };
}