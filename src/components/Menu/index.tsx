import React from 'react';

import { 
  Container, 
  Logo, 
  MenuButtonContainer,
  DocumentButton,
  FolderButton,
  UploadButton,
  Document,
  Folder,
  Upload
} from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Logo />
      <MenuButtonContainer>
        <DocumentButton>
          <Document />
        </DocumentButton>
        <FolderButton>
          <Folder />
        </FolderButton>
        <UploadButton>
          <Upload />
        </UploadButton>
      </MenuButtonContainer>
    </Container>
  );
}

export default Menu;