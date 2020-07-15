import styled, { css } from 'styled-components';
import { 
  LogoIcon, 
  DocumentIcon,
  FolderIcon,
  UploadIcon
} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;

  background-color: var(--dark-blue);
  border-radius: 10px;
  border-top-right-radius: 90px;

  @media (min-width: 800px) {
    margin: 25px;
    padding: 28px;
  }
`;

export const Logo = styled(LogoIcon)``;

export const MenuButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    margin-top: 10px;
    margin-right: 75px;
  }
`;

const buttonCSS = css`
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: var(--very-dark-blue);
  width: 55px;
  height: 55px;
  margin-top: 20px;
  margin-right: 20px;
  padding: 10px;
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const DocumentButton = styled.button`
  ${buttonCSS};
`;

export const FolderButton = styled.button`
  ${buttonCSS};
`;

export const UploadButton = styled.button`
  ${buttonCSS};
`;

export const Document = styled(DocumentIcon)`
  ${iconCSS};
`;

export const Folder = styled(FolderIcon)`
  ${iconCSS};
`;

export const Upload = styled(UploadIcon)`
  ${iconCSS};
`;
