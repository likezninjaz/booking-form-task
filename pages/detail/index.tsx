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
  BookButton,
  Description,
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
    
    const mockData = require('../../static/data/MOCK_DATA.json');
    const hotelId = req ? req.query.id : query.id;
    const hotelData = mockData.filter((hotel: IHotels) => hotel.id === hotelId);

    return {
      hotel: hotelData.length ? hotelData[0] : null
    }
  }

  private handleBookButtonClick = () => {
    alert('Successfully booked!')
  }

  public render() {

    const {
      hotel
    } = this.props;

    return (
      <Container>
        <Head>
          <link rel="stylesheet" type="text/css" href="./static/styles/react-datepicker.min.css" />
          <title>{hotel ? `${hotel.name} - book it now` : 'Book your hotel'}</title>
        </Head>
        {hotel &&
          <Wrapper>
            <Image src={hotel.photo}/>
            <Info>
              <Name>{hotel.name}</Name>
              <Location>{hotel.city}</Location>
              <Rating count={hotel.rating}/>
              <Description>{hotel.description}</Description>
            </Info>
            <Actions>
              Pick the booking dates:
              <Daterange />
              <BookButton onClick={this.handleBookButtonClick}>Book</BookButton>
            </Actions>
          </Wrapper>
        }
      </Container>
    )
  }
}

export default withRouter(Detail)