import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, render } from 'enzyme';
configure({ adapter: new Adapter() });

import Table from '../Table';

const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9],
];

describe('Table component', () => {
    it('a table with rows and columns', () => {
      const wrapper = render(<Table puzzle={puzzle} />);
      expect(wrapper.find('tbody').children().length).toBe(9);
    });
 });

