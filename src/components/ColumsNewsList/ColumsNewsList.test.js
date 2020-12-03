import React from 'react';
import ColumnsNewsList from './ColumnsNewsList';
import {render} from '@testing-library/react-native';

const newsArray = [
  {
    urlToImage: 'test-url',
    title: 'test-title',
    description: 'test-description',
  },
  {
    urlToImage: 'test-url1',
    title: 'test-title1',
    description: 'test-description1',
  },
];

const onItemClick = jest.fn();

describe('ColumnsNewsList', () => {
  test('Is Columns News Flatlist defined', async () => {
    const {getByTestId} = render(
      <ColumnsNewsList newsArray={newsArray} onItemClick={onItemClick} />,
    );
    const columnsFlatList = getByTestId('columns-news-flatlist');
    expect(columnsFlatList).toBeDefined();
  });

  test('News list has correct number of children', async () => {
    const {getByTestId} = render(
      <ColumnsNewsList newsArray={newsArray} onItemClick={onItemClick} />,
    );
    const columnsFlatList = getByTestId('columns-news-flatlist');
    expect(columnsFlatList.props.children.length).toBe(2);
  });
});
