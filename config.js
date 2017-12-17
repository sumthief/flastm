/**
 * Last FM api supports 3 methods of authorization:
 *   - Desktop
 *   - Web
 *   - Mobile
 * You can choose which method more preferable for you:
 *   - getting token based on your app secret -> getting session based on token
 *   - getting session based on username/password combination
 * It's not required to fill both auth_web and auth_mobile sections.
 * @type {{api_key: string, auth_web: {secret: string}, auth_mobile: {username: string, password: string}}}
 */
module.exports = {
    // API key got from https://www.last.fm/api/account/create.
    api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    // Optional (fill only if this method is preferable for you and you are
    // going to use POST methods).
    auth_web: {
        // Shared secret got from https://www.last.fm/api/account/create.
        secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    // Optional (fill only if this method is preferable for you and you are
    // going to use POST methods).
    auth_mobile: {
        // Username for mobile session auth.
        username: 'xxxxxxxx',
        // Password for mobile session auth.
        password: 'xxxxxxxx'
    }
};
