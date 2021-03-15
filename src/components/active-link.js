import React, { Children } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);
  let className = child.props.className || '';

  if (pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
