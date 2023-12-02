import React from 'react';
import { Button } from 'react-bootstrap';

const CommonButton = ({ type, className, variant, onClick, children }) => {
    return (
        <div>
            <Button type={type} className={className} variant={variant} onClick={onClick}>
                {children}
            </Button>
        </div>
    );
};

export default CommonButton;
