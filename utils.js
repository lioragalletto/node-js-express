export const successResponse = (res,data) => {
    return res.status(200).send(data)
}

export const errorResponse = (res,error,codeStatus=500) => {
    return res.status(codeStatus).send({
        error
    })
}
