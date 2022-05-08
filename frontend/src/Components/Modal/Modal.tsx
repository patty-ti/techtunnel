import * as S from './Modal.styles';
import React from 'react';

const Modal: React.FC<any> = ({ id = 'modal', onClose = () => {}, children }) => {

    const handleOutsideClick = (e: any) => {
        if(e.target.id === id) onClose();
    }

    return(
        <S.Modal id={id} onClick={handleOutsideClick}>
            <S.Container>
                <button className="close" onClick={onClose}>X</button>
                <div>{children}</div>
            </S.Container>
        </S.Modal>
    );
};

export default Modal;