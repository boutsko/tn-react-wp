import React from 'react'
import {render} from 'react-dom'
import BlogList from './components/BlogList'
import {posts} from './fixtures'

render(<BlogList posts={posts}/>, document.getElementById('container'))
