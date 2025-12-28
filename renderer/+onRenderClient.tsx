import React from 'react';
import ReactDOM from 'react-dom/client';
import type { OnRenderClientAsync } from 'vike/types';

export const onRenderClient: OnRenderClientAsync = async (pageContext) => {
    const { Page } = pageContext;

    const root = document.getElementById('root');
    if (!root) throw new Error('Root element not found');

    // Hydrate the pre-rendered HTML
    ReactDOM.hydrateRoot(root, React.createElement(Page));
};
