import React from 'react';

import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:focus:ring-offset-slate-900',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 focus:ring-slate-500',
        outline: 'border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-500 text-slate-700 dark:text-slate-300',
        ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 focus:ring-slate-500',
    };

    const sizes = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-lg',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        />
    );
};
