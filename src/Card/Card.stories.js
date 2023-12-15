import React from 'react';
import { Card, CardBadge, CardWithDismiss, Horizontal } from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const CustomCard = () => <Card />;
export const CardWithBadges = () => <CardBadge />;
export const CardDismiss = () => <CardWithDismiss />;
export const HorizontalCard = () => <Horizontal />;
