/**
 * Created by Arnab Karmakar on 9/20/17.
 */
import { ADD, DELETE, COMPLETED, addItem, deleteItem, changeItemType } from '../todo';
import { expect } from 'chai';

describe('Test todo.js', () => {
  it('addItem', () => {
    const text = 'text';
    const expected = {
      type: ADD,
      text,
    };
    expect(addItem(text)).to.be.deep.equal(expected);
  });

  it('deleteItem', () => {
    const index = 0;
    const expected = {
      type: DELETE,
      index,
    };
    expect(deleteItem(index)).to.be.deep.equal(expected);
  });

  it('changeItemType', () => {
    const index = 0, isSelected = false;
    const expected = {
      type: COMPLETED,
      index,
      isSelected,
    };
    expect(changeItemType(index, isSelected)).to.be.deep.equal(expected);
  });
});
