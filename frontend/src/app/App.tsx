import { RouterProvider } from 'react-router-dom';

import { useRoutesProvider } from '@/presentation/routes/useRoutesProvider';

import './App.scss';

function App() {
    const { routes } = useRoutesProvider();

    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
