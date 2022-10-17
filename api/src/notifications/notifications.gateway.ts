import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WsException,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { WebSocketServer } from '@nestjs/websockets'
import { LivelocationsService } from 'src/livelocations/livelocations.service'
import { LocationsService } from 'src/locations/locations.service'
import { CreateLivelocationInput } from 'src/livelocations/dto/create-livelocation.input'
import { Livelocation } from 'src/livelocations/entities/livelocation.entity'
import { UsePipes, ValidationPipe } from '@nestjs/common'
import { MyWebSocketValidationPipe } from 'src/bootstrap/exceptions/MyWebSocketValidationPipe'

@WebSocketGateway()
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(
    private readonly livelocationsService: LivelocationsService,
    private readonly locationsService: LocationsService,
  ) {}

  @WebSocketServer() //ipv afterInit()
  server: Server

  numberOfClients: number = 0

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(payload)
    //throw new WsException('Method not implemented.')
    return 'Hello world!'
  }

  @UsePipes(new MyWebSocketValidationPipe())
  @SubscribeMessage('birdspotter:moving')
  async handleNewLocation(
    @MessageBody() data: CreateLivelocationInput,
    @ConnectedSocket() client: Socket,
  ): Promise<Livelocation> {
    console.log(data)
    const liveLoc = await this.livelocationsService.create(data)
    //check if in a known area/location
    const l = await this.locationsService.findLocationByPoint(
      liveLoc.geolocation,
    )

    
    if (l.length > 0) {
      const nameArea = l[0].name
      console.log('in a known area/location', nameArea)

      console.log('put in room')
      console.log(`Rooms of this client:`, client.rooms)
      //add client to room
      client.join(nameArea)
      console.log(`Rooms of this client:`, client.rooms)
      //send to all clients in room, except sender
      //client.to(nameArea).emit('birdspotter:newlocation', liveLoc)
      //send to all clients in room, including sender
      this.server
        .to(nameArea)
        .emit('birdspotter:newlocation', { location: liveLoc, room: nameArea })
    } else {
      console.log('not in a known area/location')
    }

    // this.server.emit('birdspotter:newlocation', data) //send to all clients including the one that sent the message
    //client.broadcast.emit('birdspotter:newlocation', data) //to all but the sender
    return Promise.resolve(liveLoc)
  }

  handleDisconnect(client: any) {
    //throw new Error('Method not implemented.')
    this.numberOfClients--
    this.server.emit('users:userLeaving', {
      connectedUsers: this.numberOfClients,
    })
  }
  handleConnection(client: any, ...args: any[]) {
    this.numberOfClients++
    // Notify connected clients of current users
    this.server.emit('users:newuserconnetected', {
      connectedUsers: this.numberOfClients,
    })
    console.log('A client has connected')
    console.log(`Number of clients: ${this.numberOfClients}`)
  }
}