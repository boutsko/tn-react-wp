import React from 'react'
import {render} from 'react-dom'
import BlogPage from './components/BlogPage'
import {posts} from './fixtures'
import '../semantic/dist/semantic.min.css'

render(<BlogPage posts={posts}/>, document.getElementById('container'))
