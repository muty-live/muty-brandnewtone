import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { LiveStream } from './pages/LiveStream';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PerformerProfile } from './pages/PerformerProfile';
import { GiftSend } from './pages/GiftSend';
import { UserSettings } from './pages/UserSettings';
import { UserLogout } from './pages/UserLogout';
import { UserDelete } from './pages/UserDelete';
import { UserTerms } from './pages/UserTerms';
import { PerformerRegister } from './pages/PerformerRegister';
import { LiveEnded } from './pages/LiveEnded';
import { Contact } from './pages/Contact';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Concept } from './pages/Concept';
import { Actress } from './pages/Actress';
import { Sitemap } from './pages/Sitemap';
import { Loading } from './loading/Loading';

export const router = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/live/:id', Component: LiveStream },
  { path: '/login', Component: Login },
  { path: '/register', Component: Register },
  { path: '/profile/:id', Component: PerformerProfile },
  { path: '/gift/:streamId/:giftId', Component: GiftSend },
  { path: '/user/settings', Component: UserSettings },
  { path: '/user/logout', Component: UserLogout },
  { path: '/user/delete', Component: UserDelete },
  { path: '/user/terms', Component: UserTerms },
  { path: '/performer/register', Component: PerformerRegister },
  { path: '/live-ended/:id', Component: LiveEnded },
  { path: '/contact', Component: Contact },
  { path: '/news', Component: News },
  { path: '/news/:id', Component: NewsDetail },
  { path: '/concept', Component: Concept },
  { path: '/actress', Component: Actress },
  { path: '/sitemap', Component: Sitemap },
  { path: '/loading', Component: Loading },
  {
    path: '*',
    Component: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-muted-foreground">ページが見つかりませんでした</p>
        </div>
      </div>
    ),
  },
], {
  basename: import.meta.env.BASE_URL
});