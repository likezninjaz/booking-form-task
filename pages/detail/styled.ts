import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const Info = styled.div`
  width: 300px;
  padding: 10px;
`;

export const Name = styled.span`
  color: #383838;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;
`;

export const Location = styled.span`
  display: block;
  color: #707070;
  font-size: 14px;
  line-height: 24px;
`;

export const Rating = styled.span`
  padding-left: 5px;
`;

export const Actions = styled.div`
  width: 200px;
`;

export const BookButton = styled.button`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  background-color: #07c;
  color: #fff;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
