
export const timeOfMyRequest = (req, res, next) => {
    req.user.timeOfMyRequest = new Date ()
    next()
  }