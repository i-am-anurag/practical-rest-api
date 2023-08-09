const asyncHandler = require("../utils/asyn-handler");

const SuccessResponse = (data,message) => {
    return {
        success: true,
        message: message,
        data,
        error: {},
    }
};

const FailureResponse = (error) => {
    return {
        success: false,
        message: "something went wrong",
        data: {},
        error: error.message,
    }
};

const responses = asyncHandler(async (req, res, next) => {
    res.OK = (data,message) => {
        const resBody = SuccessResponse(data,message);
        return res.status(200).json(resBody);
    };

    res.CREATED = (data,message) => {
        const resBody = SuccessResponse(data,message);
        return res.status(201).json(resBody);
    }

    res.BADREQUEST = (error) => {
        const resBody = FailureResponse(error);
        return res.status(400).json(resBody);
    }

    res.UNAUTHORIZED = (error) => {
        const resBody = FailureResponse(error);
        return res.status(401).json(resBody);
    }

    res.FORBIDDEN = (error) => {
        const resBody = FailureResponse(error);
        return res.status(403).json(resBody);
    }

    res.APPERROR = (error) => {
        const resBody = FailureResponse(error);
        return res.status(500).json(resBody);
    }
    next();
});

module.exports = responses;