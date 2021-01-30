import React, { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, href, ...rest }) => {
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default Link;
