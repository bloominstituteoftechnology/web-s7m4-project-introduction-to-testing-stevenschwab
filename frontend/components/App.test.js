import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import index from '../i18n/index.json'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(index.en.LABEL_USERNAME)).toBeVisible()
    })
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(index.en.PLACEHOLDER_USERNAME)).toBeVisible()
    })
    test(`TEXT_FAV_LANG is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_FAV_LANG)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_JS is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(index.en.TEXT_FAV_LANG_JS)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_RUST is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(index.en.TEXT_FAV_LANG_RUST)).toBeVisible()
    })
    test(`LABEL_FAV_FOOD is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(index.en.LABEL_FAV_FOOD)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(index.en.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
    })
    test(`LABEL_ACCEPT_TERMS is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(index.en.LABEL_ACCEPT_TERMS)).toBeVisible()
    })
    test(`TEXT_SUBMIT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByDisplayValue(index.en.TEXT_SUBMIT)).toBeVisible()
    })
  })
  describe('Spanish Language', () => {
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(index.esp.LABEL_USERNAME)).toBeVisible()
    })
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByPlaceholderText(index.esp.PLACEHOLDER_USERNAME)).toBeVisible()
    })
    test(`TEXT_FAV_LANG is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_FAV_LANG)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_JS is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(index.esp.TEXT_FAV_LANG_JS)).toBeVisible()
    })
    test(`TEXT_FAV_LANG_RUST is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(index.esp.TEXT_FAV_LANG_RUST)).toBeVisible()
    })
    test(`LABEL_FAV_FOOD is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(index.esp.LABEL_FAV_FOOD)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_1 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_OPT_FAV_FOOD_1)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_2 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_OPT_FAV_FOOD_2)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_3 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_OPT_FAV_FOOD_3)).toBeVisible()
    })
    test(`TEXT_OPT_FAV_FOOD_4 is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(index.esp.TEXT_OPT_FAV_FOOD_4)).toBeVisible()
    })
    test(`LABEL_ACCEPT_TERMS is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(index.esp.LABEL_ACCEPT_TERMS)).toBeVisible()
    })
    test(`TEXT_SUBMIT is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByDisplayValue(index.esp.TEXT_SUBMIT)).toBeVisible()
    })
  })
  describe('getEntriesByKeyPrefix', () => {
    const obj = {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }
    const answer = [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]
    const answerTwo = [
      ["xyz_1", "data_xyz_1"],
    ]
    test('can extract the correct data', () => {
      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(answer)
    })
    test('can extract the correct data', () => {
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(answerTwo)
    })
    test('returns an empty array if no matches', () => {
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual([])
    })
  })
})
function getEntriesByKeyPrefix(obj, keyPrefix) {
  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */
  return Object.entries(obj).filter(keyValuePair => keyValuePair[0].slice(0, keyValuePair[0].indexOf("_")) === keyPrefix)
}
