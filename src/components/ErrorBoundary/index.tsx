// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/#options-2-writing-your-custom-error-boundary-component

import { Component, ReactNode } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: null | Error | FetchBaseQueryError;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(
    error: Error | FetchBaseQueryError
  ): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      // TODO FetchBaseQueryError 쪽 에러면 여기서 적절하게 보여주자
      // TODO 내부 에러 페이지 꾸미기
      return (
        <Container>
          <h1>알 수 없는 에러가 발생했습니다! 메인으로</h1>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
