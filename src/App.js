import * as React from 'react';
import { Button, Input } from '../lib';

import { myFunc } from './utils/utils';

class App extends React.Component {
    render() {
        const circle = {
            size: 1,
            radius: 2,
        }
        const rectangle = {
            size: 1,
            width: 5,
        }
        myFunc(circle);
        myFunc(rectangle);
        return (
            <div>
                <Button>test</Button>
                <Input />
            </div>
        );
    }
}

export default App;