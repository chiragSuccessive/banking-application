import Server from './src/Server';
import configuration from './src/config/configuration';
import schema from './src';
// import {PubSub} from 'apollo-server';

const server = new Server(configuration);
// const pubsub- = new PubSub();
const initServer = () => {
    server.bootstrap()
        .setupApollo( schema );
}
initServer()
export default server;