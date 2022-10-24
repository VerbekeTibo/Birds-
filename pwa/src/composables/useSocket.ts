import { io, Socket } from "socket.io-client"
import { ref } from "vue"

const socketServer = ref<Socket>()

export default () => {
    const _connect = () => {
        console.log('Connected to socket server...')
    }

    const _disconnect = () => {
        console.log('Disconnected from socket server...')
    }
    const disconnectFromServer = () => {
        socketServer.value?.disconnect()
    }

    const _error = (error: any) => {
        console.log('Error: ' + error)
    }
        const connectToServer = () => {

            if (socketServer.value) {
                return
            }
            socketServer.value = io('ws://[::1]:3003', {
                transports: ['websocket'], //polling is default, can give CORS errors

            })

            socketServer.value.on('connect', _connect)
            socketServer.value.on('disconnect', _disconnect)
            socketServer.value.on('error', _error)

        }
        return {
            connectToServer,
            disconnectFromServer
        }
    }
}