export default {
  meEndpoint: process.env.NEXT_PUBLIC_BACKEND_API + '/user/me',
  loginEndpoint: process.env.NEXT_PUBLIC_BACKEND_API + '/auth/login',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
  onTokenExpiration: 'logout' // logout | refreshToken
}
