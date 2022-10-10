import { Injectable } from '@nestjs/common';
import { App, applicationDefault, initializeApp } from 'firebase-admin/app';
import { Auth } from 'firebase-admin/lib/auth/auth';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
    private app:App
    constructor() {
        this.app = initializeApp({
            credential: applicationDefault(),
            
            
        });
        
        console.log(this.app.options.projectId);
    }
    getAuth = ():Auth => getAuth() }
