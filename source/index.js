// Core
import dg from 'debug';

// Instruments
import { app } from './server';

const port = process.env.PORT || 3000;
const debugSrv = dg('server:main');

app.listen(port, () => {
    debugSrv(`server API is up on port ${port}`);
});
