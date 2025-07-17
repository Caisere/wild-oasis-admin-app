import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { lazy } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./ui/ProtectedRoute"
// import DarkModeProvider from "./context/DarkModeContext"
import AppLayout from "./ui/AppLayout"

const DashBoard = lazy(() => import('./pages/Dashboard'))
const Bookings = lazy(() => import('./pages/Bookings'))
const Booking = lazy(() => import('./pages/Booking'))
const Cabins = lazy(() => import('./pages/Cabins'))
const Users = lazy(() => import('./pages/Users'))
const Settings = lazy(() => import('./pages/Settings'))
const Account = lazy(() => import('./pages/Account'))
const Login = lazy(() => import('./pages/Login'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
// const AppLayout = lazy(() => import('./ui/AppLayout'))
const CheckIn = lazy(() => import('./pages/Checkin')) 



const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        }
    }
})


function App () {
    return (
        // <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate replace to='dashboard' />} />
                        <Route path="dashboard" element={<DashBoard/>} />
                        <Route path="bookings" element={<Bookings/>} />
                        <Route path="bookings/:bookingId" element={<Booking />} />
                        <Route path="checkin/:bookingId" element={<CheckIn />} />
                        <Route path="cabins" element={<Cabins/>} />
                        <Route path="users" element={<Users/>} />
                        <Route path="settings" element={<Settings/>} />
                        <Route path="account" element={<Account/>} />   
                    </Route>
                    <Route path="login" element={<Login/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </BrowserRouter>

            <Toaster 
                position="top-center"
                gutter={12}
                containerStyle = {{
                    margin: '8px'
                }}
                toastOptions={{
                    success: {
                        duration: 3000
                    },
                    error: {
                        duration: 5000
                    },
                    style: {
                        fontSize: '16px',
                        maxWidth: '500px',
                        padding: '16px 24px',
                        backgroundColor: 'var(--colot-grey-0)',
                        color: 'var(--color-grey-700)',
                        textAlign: "center"
                    }
                }}
                />
        </QueryClientProvider>
        // </DarkModeProvider>
    )
}

export default App