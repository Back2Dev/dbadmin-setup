#!/usr/bin/env node

const fs = require('fs')
const { execSync } = require('child_process')
const debug = require('debug')('test')

const collections = require('./lib/collections')

const options = { stdio: 'inherit' }

test('Invalid command', () => {
  expect(() => {
    execSync('node cli.js rubbish me please', options)
  }).toThrow()
})

test('collections command', () => {
  expect(() => {
    execSync('node cli.js collections ./test-app', options)
  }).not.toThrow()
})
