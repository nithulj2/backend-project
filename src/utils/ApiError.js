class ApiError extends Error{
    constructor(
        statusCode,
        message='Something went wrong',
        errors = [].
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = this.errors
        if(stack){
            this.stack = stack
        }else  {
         errors.captureStackTrace(this, this.constructor)
            
        }
    }

}
export {ApiError}