import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: var(--dark-blue);
  border-radius: 10px;
  margin-top: 20px;
  padding: 30px;

  > strong {
    color: var(--white);
    font-size: var(--body-copy);
    font-weight: 500;

    > span {
      font-weight: 900;
    }

  }
  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
`;

export const StatusBar = styled.div`
  min-width: 260px;
  height: 20px;

  background-color: var(--very-dark-blue);
  border-radius: 20px;
  padding: 2px;
  margin-top: 20px;

  @media (min-width: 800px) {
    min-width: 400px;
  }

  @media (min-width: 1000px) {
    min-width: 550px;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: var(--gradient);
  border-radius: 20px;
  min-width: 190px;

  position: fixed;

  @media (min-width: 800px) {
    min-width: 270px;
  }

  @media (min-width: 1000px) {
    min-width: 400px;
  }
`;

export const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: var(--white);
`;

export const StatusLimits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 265px;
  margin-top: 10px;
  margin-bottom: 20px;

  color: var(--white);
  font-weight: 900;
  font-size: 14px;

  @media (min-width: 800px) {
    min-width: 405px;
  }

  @media (min-width: 1000px) {
    min-width: 555px;
  }
`;

export const LeftSpace  = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -65px;

  width: 180px;
  height: 70px;
  border-radius: 10px;
  background-color: var(--white);

  > strong {
    color: var(--very-dark-blue);
    font-size: 36px;
  }

  > span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    color: var(--grayish-blue);
    margin-top: 5px;
    margin-left: 5px;
  }

  @media (min-width: 800px) {
    top: -85px;
    right: 10px;
  }
`;

export const LeftSpaceShape = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -35px;
    right: 10px;

    border-right: 25px solid var(--white); 
    border-bottom: 20px solid transparent; 
    border-top: 20px solid transparent;
  }
`;
