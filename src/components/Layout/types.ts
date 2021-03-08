import { NextRouter } from 'next/router';

export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface ILayoutContentProps {
  children?: React.ReactNode;
}

export interface ILayoutMenuProps {
  router: NextRouter;
}
