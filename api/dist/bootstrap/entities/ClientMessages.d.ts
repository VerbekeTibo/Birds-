export declare enum MessageTypes {
    success = "success",
    error = "error",
    warning = "warning"
}
export declare class ClientMessage {
    type: MessageTypes;
    message: string;
    statusCode: number;
}
