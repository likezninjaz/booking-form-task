import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import {
  Container,
  Wrapper,
  Image,
  Info,
  Actions,
  Name,
  Location,
} from './styled';
import {
  IHotels
} from '../../types'
import {
  Rating
} from '../../components/Rating';
import {
  Daterange
} from '../../components/Daterange'

interface IDetailProps {
  hotel: IHotels | null
}

class Detail extends React.Component<IDetailProps> {

  constructor(props: IDetailProps) {
    super(props);

    this.state = {
      hotel: null
    }
  }

  static async getInitialProps ({ req, query }: any) {
    
    const mockData = require('../../MOCK_DATA.json');
    const hotelId = req ? req.query.id : query.id;
    const hotelData = mockData.filter((hotel: IHotels) => hotel.id === hotelId);

    return {
      hotel: hotelData.length ? hotelData[0] : null
    }
  }

  public render() {

    const {
      hotel
    } = this.props;

    return (
      <Container>
        <Head>
          <title>{hotel ? `${hotel.name} - book it now` : 'Book your hotel'}</title>
        </Head>
        {hotel &&
          <Wrapper>
            <Image src={hotel.photo}/>
            <Info>
              <Name>{hotel.name}</Name>
              <Location>{hotel.city}</Location>
              <Rating count={hotel.rating}/>
            </Info>
            <Actions>
              <Daterange />
            </Actions>
          </Wrapper>
        }
      </Container>
    )
  }
}

export default withRouter(Detail)