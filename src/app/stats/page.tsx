import * as React from 'react';
import prisma from '@/lib/prisma';
import ContentArea from '@/components/ContentArea';
export default function Stats() {
    const userCount = prisma.user.count()

    return (
        <ContentArea>
            <div className="text-center mt-16">
                <h1 className="text-3xl text-gray-800">Accounts</h1>
                <span className="text-6xl font-bold text-green-500 ml-2">{userCount}</span>
            </div>
        </ContentArea>
    );
}