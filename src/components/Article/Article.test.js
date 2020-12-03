import React from 'react';
import Article from './Article';
import {render} from '@testing-library/react-native';

const route = {
  params: {imageUri: 'test-url', title: 'test-title', content: 'test-content'},
};

describe('Article', () => {
  test('Is title text defined', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const titleText = getByTestId('article-title');
    expect(titleText).toBeDefined();
  });

  test('Is title text correct', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const titleText = getByTestId('article-title');
    expect(titleText.props.children).toBe('test-title');
  });

  test('Is content text defined', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const contentNode = getByTestId('article-content');
    expect(contentNode).toBeDefined();
  });

  test('Is content text correct', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const contentNode = getByTestId('article-content');
    expect(contentNode.props.children).toBe('test-content');
  });

  test('Is image defined', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const imageNode = getByTestId('article-image');
    expect(imageNode).toBeDefined();
  });

  test('Is content text correct', async () => {
    const {getByTestId} = render(<Article route={route} />);
    const imageNode = getByTestId('article-image');
    expect(imageNode.props.source.uri).toBe('test-url');
  });
});
