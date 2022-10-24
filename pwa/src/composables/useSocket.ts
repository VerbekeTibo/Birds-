import { io, Socket } from "socket.io-client"
import { ref } from "vue"
import useGeolocation from "./useGeolocation"
import Livelocation from "../interfaces/interface.live-location"
import useCustomUser from "./useCustomUser"

const socketServer = ref<Socket>()
const connected = ref<boolean>(false)

export default () => {

    const { startTracking } = useGeolocation()
    const { customUser } = useCustomUser()
    const _connect = () => {
        console.log('Connected to socket server...')
        connected.value = true
        startTracking((p: GeolocationPosition) => {
            const payload: Livelocation = {
                idUser: customUser.value!.id!,
                geolocation: {
                    type: 'Point',
                    coordinates: [p.coords.longitude, p.coords.latitude]
                }
            }
            socketServer.value!.emit('bordspotter:moving', payload)
        })

    }

    const _disconnect = () => {
        console.log('Disconnected from socket server...')
        connected.value = false
    }
    const disconnectFromServer = () => {
        if (socketServer.value) {
            socketServer.value?.disconnect()
            socketServer.value = undefined
        }
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
        connected,
        connectToServer,
        disconnectFromServer
    }
}
