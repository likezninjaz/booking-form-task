import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Input: any = styled.input`
  width: 400px;
  padding: 20px;
  font-size: 18px;
  border: 1px solid grey;
  border-radius: 4px;
`;

export const List = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  width: 440px;
  max-height: 400px;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  border-radius: 4px;
  list-style: none;
  overflow-y: scroll;
`;

export const Item = styled.li`
  position: relative;
  padding: 10px 40px;

  &:hover {
    background: #ececec;
    cursor: pointer;
  }
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
  line-height: 20px;
`;

export const ImageContiner = styled.div`
  position: absolute;
  left: 5px;
`;

export const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 4px;
`;

export const NoData = styled.li`
  padding: 10px;
`;
