import styled from 'styled-components';

const Widget: any = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBg;
  }};
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
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 32px 0;

    input {
      margin-bottom: 25px;
      height: 38px;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.mainBg};
      border: 1px solid #3f51b5;
      outline: none;
      padding: 0 16px;

      color: ${({ theme }) => theme.colors.contrastText};
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }

    button {
      height: 38px;
      outline: none;
      border: 1px solid #3f51b5;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: #979797;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);

      span {
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        text-transform: uppercase;
        color: #ffffff;
      }

      :enabled {
        background-color: #e91e63;
        cursor: pointer;
      }
    }
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

export default Widget;
