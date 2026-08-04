import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import App from './App';

test('ホームにメニューのリンクが表示される', () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  expect(screen.getByText('プロフィール')).toBeInTheDocument();
  expect(screen.getByText('プロジェクト')).toBeInTheDocument();
});
