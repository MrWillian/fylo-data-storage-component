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
        <DocumentButton name="document-button" aria-label="document-button">
          <Document />
        </DocumentButton>
        <FolderButton name="folder-button" aria-label="folder-button">
          <Folder />
        </FolderButton>
        <UploadButton name="upload-button" aria-label="upload-button">
          <Upload />
        </UploadButton>
      </MenuButtonContainer>
    </Container>
  );
}

export default Menu;