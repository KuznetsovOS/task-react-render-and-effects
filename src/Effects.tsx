import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState<number>(-1);

    useEffect(() => {
        const handleNewMessage = (newMessage: number) => {
            setLastMessage(newMessage);
        };

        subscribe(props.sourceId, handleNewMessage);

        return () => {
            unsubscribe(props.sourceId, handleNewMessage);
            setLastMessage(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
