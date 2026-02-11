
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();


    let status:number;
    let message:any


    if(exception instanceof HttpException){
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse()

      message = 
      typeof exceptionResponse === "string"
      ? exceptionResponse
      :(exceptionResponse as any).message || exceptionResponse
    }else{
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = "Internal server error"
    }
    

    response.status(status).json({
      success:false,
      statusCode:status,
      message,
      timestamp:new Date().toISOString(),
      path:request.url,
      method:request.method
    })
   
  }
}
