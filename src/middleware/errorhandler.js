function errorHandler(err, req, res, next) {
    if (err.statusCode == 400)
        return res.BADREQUEST(err);
    else if (err.statusCode == 403)
        return res.FORBIDDEN(err);
    else if (err.statusCode == 401)
        return res.UNAUTHORIZED(err);
    return res.APPERROR(err);
}

module.exports = errorHandler;