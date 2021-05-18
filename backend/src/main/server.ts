import app from './config/app'

export const expressServer = () => {
    try {
        app.listen('3333', () => console.log('server start'))
    } catch (error) {
        console.error(error)
    }
}