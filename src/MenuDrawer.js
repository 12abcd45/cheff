import React from 'react';

import { withRouter } from 'next/router';
import Link from 'next/link';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
} from 'rmwc/Drawer';
import { ListDivider, SimpleListItem } from 'rmwc/List';
import { Typography } from 'rmwc/Typography';
import { Icon } from 'rmwc';
import meta from './meta';

const PATHS = {
  about: '/about',
  calculator: '/calculator',
  help: '/onboarding',
  plan: '/plan',
  recipes: '/recipes',
  sync: '/sync',
  trivia: '/trivia',
};

const MenuDrawer = ({ open, onClose, router = {} }) => {
  const { pathname = '' } = router;
  return (
    <Drawer onClose={onClose} open={open} modal>
      <DrawerHeader>
        <DrawerTitle theme="primary">{meta.title}</DrawerTitle>
        <DrawerSubtitle>{meta.subtitle}</DrawerSubtitle>
      </DrawerHeader>

      <DrawerContent onClick={onClose}>
        <Link href={PATHS.trivia}>
          <SimpleListItem
            graphic={<Icon icon="casino" theme="primary" />}
            text="Trivia"
            selected={pathname === PATHS.trivia}
          />
        </Link>
        <Link href={PATHS.plan}>
          <SimpleListItem
            graphic={<Icon icon="list_alt" theme="primary" />}
            text="Meal Plan"
            selected={pathname === PATHS.plan}
          />
        </Link>
        <Link href={PATHS.recipes}>
          <SimpleListItem
            graphic={<Icon icon="restaurant" theme="secondary" />}
            text="Recipes"
            selected={pathname === PATHS.recipes}
          />
        </Link>
        <Link href={PATHS.calculator}>
          <SimpleListItem
            graphic="dialpad"
            text="Calculator"
            selected={pathname === PATHS.calculator}
          />
        </Link>

        <ListDivider />

        <Link href={PATHS.about}>
          <SimpleListItem
            graphic="info"
            text="About"
            selected={pathname === PATHS.about}
          />
        </Link>
        <Link href={PATHS.help}>
          <SimpleListItem
            graphic="help_outline"
            text="Help"
            selected={pathname === PATHS.help}
          />
        </Link>

        <Typography use="overline" tag="div" className="px-4">
          Advanced
        </Typography>
        <ListDivider />

        <Link href={PATHS.sync}>
          <SimpleListItem
            graphic="compare_arrows"
            text="Sync"
            selected={pathname === PATHS.sync}
          />
        </Link>
      </DrawerContent>
    </Drawer>
  );
};

export default withRouter(MenuDrawer);
