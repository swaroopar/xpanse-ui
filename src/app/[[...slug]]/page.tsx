import '../../styles/index.css';
import { ClientOnly } from './client';
import React from 'react';

export function generateStaticParams() {
    return [{ slug: [''] }];
}

export default function Page(): React.JSX.Element {
    return <ClientOnly />;
}
