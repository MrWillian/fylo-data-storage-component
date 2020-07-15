import React from 'react';

import { 
  Container, 
  StatusContainer, 
  StatusBar, 
  ProgressBar,
  Ball,
  StatusLimits, 
  LeftSpace,
  LeftSpaceShape
} from './styles';

const Info: React.FC = () => {
  return (
    <Container>
      <strong>You've used <span>815 GB</span> of your storage</strong>
      <StatusContainer>
        <StatusBar>
          <ProgressBar>
            <Ball />
          </ProgressBar>
        </StatusBar>
        <StatusLimits>
          <span>0 GB</span>
          <span>1000 GB</span>
        </StatusLimits>
        <LeftSpace>
          <strong>185</strong>
          <span>GB Left</span>
        </LeftSpace>
        <LeftSpaceShape />
      </StatusContainer>
    </Container>
  );
}

export default Info;