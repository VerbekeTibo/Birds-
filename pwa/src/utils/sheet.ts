//@ts-nocheck

import fs, { promises as fsPromises } from 'fs';
import path from 'path';
import process from 'process';
import { authenticate } from '@google-cloud/local-auth';

import { google } from 'googleapis';

import { AVAILABLE_LOCALES } from '../composables/usei18n';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), './src/utils/token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), './src/utils/client_secret_157922284718-tiou7toq9b3dbe9vu3nq8vn59dnb0o41.apps.googleusercontent.com.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
    try {
        const content = await fsPromises.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
    const content = await fsPromises.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fsPromises.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
        return client;
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (client.credentials) {
        await saveCredentials(client);
    }
    return client;
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
async function generateMessagesForLocales(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    AVAILABLE_LOCALES.map(async (locale) => {

        const res = await sheets.spreadsheets.values.get({
            spreadsheetId: '1451-ykIB96hukE76mj-GWkfCeiFxyGxYukSDIFndmlE',
            range: locale,
        });

        const rows = res.data.values
        if (!rows || rows.length === 0) {

            return;
        }
        rows!.shift()
        const translations = { [locale]: {} }

        // translations[locale] = rows!.map((row) => ({[row[0]]: row[2]}))
        for (const row of rows!) {
            //@ts-ignore
            translations[locale][row[0]] = row[2]

        }

        fsPromises.writeFile(
            path.join(process.cwd(), `./src/locales/${locale}.json`), 
            JSON.stringify(translations))
    })

    //en => {messages}
    //nl => {messages}
    //zh => {messages}


}

authorize().then(generateMessagesForLocales).catch(console.error);