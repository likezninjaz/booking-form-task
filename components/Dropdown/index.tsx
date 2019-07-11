import React, { useState } from 'react';
import Link from 'next/link';
import _ from 'lodash';

import {
  Container,
  Input,
  List,
  Item,
  Name,
  Location,
  ImageContiner,
  Image,
  NoData,
} from './styled';
import {
  IHotels
} from '../../types'
import {
  iconPoint
} from '../Icons'
import {
  Rating
} from '../Rating';

interface IDropdownProps {
  data: any[]
}

export const Dropdown = ({
  data
}: IDropdownProps) => {

  const [inputValue, setValue] = useState('');

  const filteredData = inputValue === '' 
    ? data.slice(0, 5)
    : data.filter((hotel: IHotels) => 
      hotel.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      hotel.city.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <Container>
      <Input
        placeholder='Please, type a hotel name or a city name'
        onChange={(e: any) => setValue(e.target.value)}
        value={inputValue}
      />
      <List>
        {filteredData.length
          ? filteredData.map((hotel: IHotels) =>
              <Link href={`/detail?id=${hotel.id}`} key={hotel.id}>
                <Item>
                  <ImageContiner>
                    {hotel.photo 
                      ? <Image src={hotel.photo}/>
                      : iconPoint
                    }
                  </ImageContiner>
                  <Name>{hotel.name}</Name>
                  {hotel.rating &&
                    <Rating count={hotel.rating}/>
                  }
                  <Location>{hotel.city}</Location>
                </Item>
              </Link>
            )
          : 
            <NoData>No data found</NoData>
        }
      </List>
    </Container>
  )
}