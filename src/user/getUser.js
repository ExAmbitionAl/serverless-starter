'use strict';
import {connectToDatabase} from '../db/db';
import {_200, _40x} from '../util/responses/responses';

export const getUser = async (event) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const { id } = event.pathParameters;

    connectToDatabase();

    try {

        let user = await getUserFromDB(id);
        return _200(user);

    } catch (error) {
        return _40x(error,400);
    }
};

const getUserFromDB = (id) => {
    return {
        name: "TestUser",
    }
}