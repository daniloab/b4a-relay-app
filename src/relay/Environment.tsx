/* global __DEV__ */
// import { installRelayDevTools } from 'relay-devtools';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// import cacheHandler from './cacheHandler';
import { relayTransactionLogger } from './relayTransactionLogger';

// if (__DEV__) {
//   installRelayDevTools();
// }

// const network = Network.create(cacheHandler);
const network = Network.create();

const source = new RecordSource();
const store = new Store(source);

// export const inspector = new RecordSourceInspector(source);

const env = new Environment({
    network,
    store,
    log: __DEV__ ? relayTransactionLogger : null,
});

export const getEnvironment = () => {
    return env;
};

const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
    global.relayEnvironment = env;
    global.debugRelayStore = () =>
        env
            .getStore()
            .getSource()
            .toJSON();
}

export default env;
