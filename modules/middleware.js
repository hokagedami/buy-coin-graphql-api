const logInputMiddleware = async (resolve, root, args, context, info) => {
    console.log(`1 -> logInputMiddleware - Input arguments:  ${JSON.stringify(args)}`);
    const result = await resolve(root, args, context, info);
    console.log(`5 -> logInputMiddleware`);
    return result
};

const logResultMiddleware = async (resolve, root, args, context, info) => {
    console.log(`2 -> logResultMiddleware`);
    const result = await resolve(root, args, context, info);
    console.log(`4 -> logResultMiddleware - Result:  ${JSON.stringify(result)}`);
    return result
};


module.exports = middlewares = [logInputMiddleware, logResultMiddleware];