import React from 'react'
import { Link, graphql } from 'gatsby'
import Fuse from 'fuse.js'

import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import styles from '../styles/blog.module.scss'

const Blog = props => {
  const { edges: posts } = props.data.allMarkdownRemark

  const [searchString, setSearchString] = React.useState('')
  const [filter, setFilter] = React.useState('ALL')

  const createBlogPostElements = posts =>
    posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <h1>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h1>
          <h2>{post.frontmatter.date}</h2>
          <h3>{post.frontmatter.author}</h3>
          <p>
            {post.excerpt} <Link to={post.frontmatter.path}>read more</Link>
          </p>
        </div>
      ))

  const createRecentPostsElements = posts =>
    posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          <p>{post.frontmatter.date}</p>
        </div>
      ))

  const onClickFilter = e => {
    e.preventDefault()
    if (filter !== e.target.innerHTML) {
      setFilter(e.target.innerHTML)
    } else {
      setFilter('ALL')
    }
  }

  let filteredPosts = posts
  if (filter !== '') {
    filteredPosts = posts.filter(post =>
      post.node.frontmatter.category.includes(filter)
    )
  }

  const searchOptions = {
    isCaseSensitive: false,
    distance: 100,
    shouldSort: true,
    keys: ['node.excerpt', 'node.frontmatter.title'],
  }

  const fuse = new Fuse(posts, searchOptions)

  let searchedPosts = filteredPosts
  if (searchString !== '') {
    searchedPosts = fuse.search(searchString).map(result => result.item)
  }

  return (
    <Layout>
      <Helmet
        title={`Notes From The Field - The COVID Local Blog`}
        meta={[
          {
            name: 'description',
            content: `COVID Local blog: keeping local leaders up to date during the COVID-19 pandemic.`,
          },
        ]}
      />

      <header className={styles.header}>
        <h1>Notes From The Field</h1>
        <Link to="/contact/">Contact us</Link>
      </header>

      <section className={styles.main}>
        <section className={styles.blogPosts}>
          <div className={styles.filters}>
            <button
              onClick={onClickFilter}
              aria-pressed={filter === 'NOTES FROM THE FIELD'}
            >
              NOTES FROM THE FIELD
            </button>
            <button
              onClick={onClickFilter}
              aria-pressed={filter === 'REPORTS FROM EXPERTS'}
            >
              REPORTS FROM EXPERTS
            </button>
            <button onClick={onClickFilter} aria-pressed={filter === 'ALL'}>
              ALL
            </button>
          </div>

          {createBlogPostElements(searchedPosts)}
        </section>

        <section className={styles.recentPosts}>
          <form>
            <label htmlFor="search">Search posts</label>
            <input
              id="search"
              type="text"
              name="search"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              placeholder="search for..."
            />
          </form>
          <h1>Recent Posts</h1>
          {createRecentPostsElements(posts)}
        </section>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 500)
          id
          frontmatter {
            title
            date(formatString: "dddd, MMMM DD, YYYY")
            path
            category
            author
          }
        }
      }
    }
  }
`

export default Blog
