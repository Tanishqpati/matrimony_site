//Advance level code
const asyncHandler = (requestHandler) => {
    ( req, res, next ) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => {
            next(error)
        })
    }
}

export {asyncHandler}

//Basic level code

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }

// }
