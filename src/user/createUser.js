'use strict';
import {connectToDatabase} from '../db/db';
import {_200, _40x} from '../util/responses/responses';
import userValidator from '../validators/userValidator';

export const getUser = async (event) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const body = JSON.parse(event.body);

    connectToDatabase();

    try {

        userValidator(body);

        let user = await createUser(body);
        return _200(user);

    } catch (error) {
        return _40x(error,400);
    }
};