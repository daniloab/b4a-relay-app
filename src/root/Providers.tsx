import React from 'react';
import {RelayEnvironmentProvider} from "../relay/RelayEnvironmentProvider";
import {Environment} from "../relay";

type Props = {
    children: React.ReactNode;
};

const Providers = ({children}:Props) => {
    return (
        <RelayEnvironmentProvider environment={Environment}>{children}</RelayEnvironmentProvider>
    );
};

export default Providers;