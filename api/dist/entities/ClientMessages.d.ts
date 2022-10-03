export declare enum MessageTypes {
    success = "success",
    error = "error",
    warning = "warning"
}
export declare class ClientMessage {
    type: string;
    message: string;
    statusCode: number;
}
