import styled from 'styled-components';

const Widget: any = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;

    li {
      height: 38px;
      background: rgba(63, 81, 181, 0.2);
      border-radius: 4px;
      padding-left: 16px;

      display: flex;
      flex: 1;
      align-items: center;

      a {
        text-decoration: none;
        transition: 0.3s;
        color: white;

        &:hover,
        &:focus {
          opacity: 0.5;
        }

        span {
          color: ${({ theme }) => theme.colors.contrastText};
          font-size: 14px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }

    li + li {
      margin-top: 8px;
    }
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
Widget.LinkContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;
Widget.Link = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  color: rgba(63, 81, 181, 0.9);

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
Widget.List = styled.ul`
  height: 235px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px !important;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 15px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(63, 81, 181, 0.5);
    border: 5px solid ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

Widget.ListItem = styled.li`
  justify-content: space-between;
  padding: 0 10px !important;
`;

Widget.Col = styled.div`
  height: 32px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  h1 {
    border: 1px solid #000;
    font-size: 14px;
    margin-bottom: 0;
    line-height: 0 !important;
  }
  p {
    font-size: 12px;
    border: 1px solid #000;
    line-height: 0 !important;
    font-weight: 700 !important;
  }
`;

Widget.Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 14px;
    margin: 10px;
    text-align: center;
    font-weight: 400;
  }
`;

Widget.Bubble = styled.div<{ bgColor?: string }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor || '#777'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Widget;
