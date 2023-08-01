export const successResponse = (res,data) => {

    return res.sendStatus(200).send(data)

}

 

export const errorResponse = (res,error) => {

    return res.sendStatus(500).send({

        error

    })

}