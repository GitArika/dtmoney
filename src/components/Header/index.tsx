import React from 'react';

import { Container, Content } from './styles';

import Logo from '../../assets/logo.svg';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="dtmoney" />
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}