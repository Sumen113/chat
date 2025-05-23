import React from 'react';
import { Message } from '../../types';
import { cn } from '../../lib/utils';

import Linkify from 'linkify-react';
import { Opts } from 'linkifyjs';
// import {
//     ContextMenu,
//     ContextMenuContent,
//     ContextMenuItem,
//     ContextMenuLabel,
//     ContextMenuSeparator,
//     ContextMenuShortcut,
//     ContextMenuTrigger,
// } from './context-menu';
// import { Copy } from 'lucide-react';

import emojiRegex from 'emoji-regex';
import { Filter } from 'bad-words';
import { useSettingsContext } from '@/context/settings-context';
import { format } from 'date-fns';

interface UserMessageProp extends Message {
    showName: boolean;
    isOwnMessage: boolean;
}

// interface UserContextMenuProps extends UserMessageProp {
//     children: React.ReactNode;
// }

const linkOptions: Opts = {
    attributes: {
        onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            if (!confirm('Are you sure you want to leave this page?')) e.preventDefault();
        },
    },
    target: '_blank',
};

const isOnlyEmoji = (text: string) => {
    const regex = emojiRegex();
    const matches = [...text.matchAll(regex)];
    return matches.length > 0 && matches.join('') === text;
};

const MessageBubble = (props: UserMessageProp) => {
    const { id, userName, timestamp, content, showName, isOwnMessage } = props;
    const { settings } = useSettingsContext();
    const emojiOnly = isOnlyEmoji(content);
    const filter = new Filter();
    const filteredContent = settings.profanityFilter ? filter.clean(content) : content;

    const messageClass = cn(
        'bg-gradient-to-b px-2 rounded-xl min-w-28 max-w-[75%] md:max-w-[60%] w-fit shadow-md',
        showName && !isOwnMessage && 'rounded-tl-sm',
        isOwnMessage && 'ml-auto rounded-br-sm min-w-6',
        !isOwnMessage && 'border pt-1 pb-0.5 border-neutral-700/50 from-neutral-800/90 to-neutral-900/90 text-foreground/90',
        isOwnMessage && 'py-2 chat-gradient',
        emojiOnly && 'from-transparent to-transparent shadow-transparent border-none'
    );

    return (
        // <UserContextMenu key={id} {...props}>
        <div key={id} className="overflow-hidden">
            <div id={id}>
                {showName && !isOwnMessage && (
                    <h4 className="mt-1.5 ml-0.5 text-muted-foreground text-xs capitalize w-fit">
                        {userName}
                    </h4>
                )}
                {isOwnMessage && showName && <p className="mt-2 w-fit"></p>}
                <div className={messageClass}>
                    {emojiOnly ? (
                        <p className="py-0.5">
                            {/* @ts-ignore */}
                            <em-emoji native={content} size="2.5rem" set="apple"></em-emoji>
                        </p>
                    ) : (
                        <p className="text-sm text-foreground/80 [&_a]:text-orange-500 [&_a]:underline [&_a]:decoration-dotted [&_a]:underline-offset-4 overflow-hidden text-ellipsis break-words">
                            <Linkify options={linkOptions}>{filteredContent}</Linkify>
                        </p>
                    )}
                    {!isOwnMessage && (
                        <p className="mt-0.5 text-muted-foreground text-[10px] text-right break-words">
                            {format(timestamp?.toDate(), 'hh:mm a')}
                        </p>
                    )}
                </div>
            </div>
        </div>

        // </UserContextMenu>
    );
};

export default MessageBubble;
