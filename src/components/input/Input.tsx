import * as React from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type InputSizeType = 'small' | 'default' | 'large';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSizeType,
}

class Input extends React.Component<InputProps> {
    render() {
        const { size, ...other } = this.props;
        return (
            <input {...other} />
        );
    }
}

export default Input;