import * as React from 'react';

export type ButtonSizeType = 'large' | 'default' | 'small';

export interface BaseButtonProps {
    loading: boolean,
    size?: ButtonSizeType,
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

class Button extends React.Component<ButtonProps> {
    render() {
        const { children, loading, size, ...other } = this.props;
        return (
            <button {...other}>
                {children}
            </button>
        );
    }
}

export default Button;