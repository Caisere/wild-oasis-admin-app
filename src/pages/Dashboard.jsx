import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardFilter from '../features/dashboard/DashboardFilter'
import { useRecentBookings } from "../features/dashboard/useRecentBookings";

function Dashboard() {
    useRecentBookings()

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter />
            </Row>
            <DashboardLayout />
        </>
    );
}

export default Dashboard;
