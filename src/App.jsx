import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';

function App() {

    return (
        <main className='max-w-screen-2xl font-[Epilogue] min-h-screen flex flex-col items-center bg-gray-100'>
            <BrowserRouter>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            <Hero />
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <Contact />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
