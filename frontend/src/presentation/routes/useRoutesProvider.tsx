import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const GenerateWorkFlow = lazy(
    () => import('@/presentation/pages/GenerateWorkFlow/GenerateWorkFlow')
);

function useRoutesProvider() {
    const routes = createBrowserRouter([
        {
            path: '/',
            children: [
                {
                    path: '/assistant',
                    element: (
                        <Suspense fallback={<div>Loading...</div>}>
                            <GenerateWorkFlow />
                        </Suspense>
                    ),
                },
            ],
        },
    ]);

    return { routes };
}

export { useRoutesProvider };
