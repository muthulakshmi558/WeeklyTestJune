import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicketList from './pages/TicketsList';
import TicketDetails from './pages/TicketDetails';
import withRoleGuard from './hoc/withRoleGuard';
import HomeTicket from './pages/HomeTicket';


const ProtectedTicketDetails = withRoleGuard(TicketDetails, 'agent');

function TicketPage() {
  return (
    <>
      
        <Routes>
            <Route path="/" element={<HomeTicket />} />
            <Route path="/tickets" element={<TicketList />} />
          <Route path="/tickets/:ticketId" element={<ProtectedTicketDetails />} />
        </Routes>
      

      <div id="portal-root"></div>
    </>
  );
}

export default TicketPage;
