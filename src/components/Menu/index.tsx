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
        <DocumentButton name="document-button">
          <Document />
        </DocumentButton>
        <FolderButton name="folder-button">
          <Folder />
        </FolderButton>
        <UploadButton name="upload-button">
          <Upload />
        </UploadButton>
      </MenuButtonContainer>
    </Container>
  );
}

export default Menu;