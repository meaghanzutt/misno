import { Navigate, Route, Routes } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { AppLayout } from './layouts/AppLayout';
import { WorkspaceLayout } from './layouts/WorkspaceLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { HomePage } from './pages/public/HomePage';
import { MembershipsPage } from './pages/public/MembershipsPage';
import { AboutPage } from './pages/public/AboutPage';
import { ContactPage } from './pages/public/ContactPage';
import { LegalPage } from './pages/public/LegalPage';
import { AppHomePage } from './pages/app/AppHomePage';
import { DiscoverPage } from './pages/app/DiscoverPage';
import { MessagesPage } from './pages/app/MessagesPage';
import { PassportPage } from './pages/app/PassportPage';
import { ProfilePage } from './pages/app/ProfilePage';
import { WorkspaceOverviewPage } from './pages/workspace/WorkspaceOverviewPage';
import { WorkspaceListPage } from './pages/workspace/WorkspaceListPage';
import { ResourcesPage } from './pages/workspace/ResourcesPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminListPage } from './pages/admin/AdminListPage';
import { StyleGuidePage } from './pages/StyleGuidePage';

export default function App(){return <Routes>
  <Route element={<PublicLayout/>}>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/memberships" element={<MembershipsPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/contact" element={<ContactPage/>}/>
    <Route path="/privacy" element={<LegalPage title="Privacy Policy"/>}/>
    <Route path="/terms" element={<LegalPage title="Terms of Use"/>}/>
  </Route>
  <Route path="/app" element={<AppLayout/>}>
    <Route index element={<AppHomePage/>}/><Route path="discover" element={<DiscoverPage/>}/><Route path="messages" element={<MessagesPage/>}/><Route path="passport" element={<PassportPage/>}/><Route path="profile" element={<ProfilePage/>}/>
  </Route>
  <Route path="/workspace" element={<WorkspaceLayout/>}>
    <Route index element={<WorkspaceOverviewPage/>}/>
    <Route path="experiences" element={<WorkspaceListPage title="Experiences" description="Create a clear home for rooms, events, people, and shared progress." items={['Coffee Passport','Sunrise Club']}/>}/>
    <Route path="rooms" element={<WorkspaceListPage title="Rooms" description="Rooms support an Experience. They never float alone." items={['Coffee & Conversation','Book Journey Check-in']}/>}/>
    <Route path="events" element={<WorkspaceListPage title="Events" description="Plan the in-person and scheduled moments inside each Experience." items={['North Park Coffee Crawl','Mission Bay Sunrise Walk']}/>}/>
    <Route path="resources" element={<ResourcesPage/>}/>
  </Route>
  <Route path="/admin" element={<AdminLayout/>}>
    <Route index element={<AdminDashboardPage/>}/><Route path="members" element={<AdminListPage title="Members" items={['Meaghan Ö','Emily Ö','Kai Ö']}/>}/><Route path="reports" element={<AdminListPage title="Reports" items={['Reported comment','Event safety concern','Profile review']}/>}/><Route path="settings" element={<AdminListPage title="Settings" items={['Registration preferences','Community guidelines','Role permissions']}/>}/>
  </Route>
  <Route path="/design-system" element={<StyleGuidePage/>}/>
  <Route path="/styleguide" element={<Navigate to="/design-system" replace/>}/>
  <Route path="*" element={<Navigate to="/" replace/>}/>
</Routes>}
