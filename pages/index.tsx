import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import {
  Dropdown
} from '../components/Dropdown';
import {
  IHotels
} from '../types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

interface IIndexState {
  hotelsData: IHotels
}

export default class extends React.Component<any, IIndexState> {

  static async getInitialProps () {
    
    const mockData = require('../MOCK_DATA.json')

    return {
      hotelsData: mockData
    }
  }

  public render() {

    const {
      hotelsData
    } = this.props;

    return (
      <Container>
        <Head>
          <title>Book your hotel</title>
        </Head>
        <Dropdown
          data={hotelsData}
        />
      </Container>
    )
  }
}