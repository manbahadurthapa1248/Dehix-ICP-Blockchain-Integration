import React from 'react';
import { Link } from 'react-router-dom';
export function Button({ variant = 'primary', size = 'md', href, className = '', children, customStyle = false, // Default to false
...props }) {
    // If using custom styling, just apply the className directly
    if (customStyle && className) {
        if (href) {
            return (<Link to={href} className={className}>
          {children}
        </Link>);
        }
        return (<button className={className} {...props}>
        {children}
      </button>);
    }
    // Default styling
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variantClasses = {
        primary: "bg-gradient-to-r from-[#8c537a] to-[#5a3d6b] text-white hover:opacity-90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-[#8c537a] hover:bg-[#8c537a]/10 text-[#8c537a]",
        ghost: "hover:bg-[#8c537a]/10 text-[#8c537a]",
    };
    const sizeClasses = {
        sm: "h-9 px-3 rounded-md text-xs",
        md: "h-10 px-4 py-2 rounded-md text-sm",
        lg: "h-11 px-8 rounded-md text-base",
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    if (href) {
        return (<Link to={href} className={classes}>
        {children}
      </Link>);
    }
    return (<button className={classes} {...props}>
      {children}
    </button>);
}
