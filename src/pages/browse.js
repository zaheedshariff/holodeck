
import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const { youtube } = useContent('films');
  const slides = selectionFilter({ series, films, youtube }); 

  return <BrowseContainer  slides={slides} />;
}

