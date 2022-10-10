import { Injectable } from '@nestjs/common'
import { App, applicationDefault, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { Auth } from 'firebase-admin/lib/auth/auth'

@Injectable()
export class FirebaseService {
  private app: App

  constructor() {
    this.app = initializeApp({
      credential: applicationDefault(), // Not always the case!
    })

    console.log(this.app.options)
  }

  // eigen              firebase getAuth
  getAuth = (): Auth => getAuth()
}
