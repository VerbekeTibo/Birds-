import { Auth } from 'firebase-admin/lib/auth/auth';
export declare class FirebaseService {
    private app;
    constructor();
    getAuth: () => Auth;
}
