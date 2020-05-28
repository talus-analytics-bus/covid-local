import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Fuse from 'fuse.js'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from '../components/Layout/Layout'

import styles from '../styles/blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allAirtable(
        filter: { data: { publishing_status: { eq: "Publish" } } }
        sort: { order: DESC, fields: data___Date }
      ) {
        edges {
          node {
            id
            data {
              Blog_Text
              Images {
                url
              }
              author
              Category
              Date
              title
              slug
            }
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allAirtable

  // console.log(posts)
  // console.log(posts.map(post => console.log(post)))

  const [searchString, setSearchString] = React.useState('')
  const [filter, setFilter] = React.useState('ALL')

  const createBlogPostElements = posts =>
    posts
      .filter(post => post.node.data.title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <h1>
            <Link to={post.data.slug}>{post.data.title}</Link>
          </h1>
          <h2>{post.data.Date}</h2>
          <h3>{post.data.author}</h3>
          <Link to={post.data.slug}>
            <img src={post.data.Images[0].url} alt={post.data.title} />
          </Link>
          <div
            // grab the first 250 words, then add an ellipsis
            // if the first paragraph is shorter than 250
            // words, just use that without the ellipsis
            dangerouslySetInnerHTML={{
              __html: unified()
                .use(markdown)
                .use(html)
                .processSync(
                  post.data.Blog_Text.split(' ')
                    .slice(0, 100)
                    .join(' ') + '... '
                )
                .contents.split(/<\/p>/g)[0],
            }}
          ></div>
          <Link to={post.data.slug}>read more</Link>
        </div>
      ))

  const createRecentPostsElements = posts =>
    posts
      .filter(({ node: post }) => post.data.title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <Link to={post.data.slug}>{post.data.title}</Link>
          <p>{post.data.date}</p>
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
  // console.log('run component')
  // console.log(posts)
  // posts.map((index, post) => {
  // console.log(post)
  // console.log('index ', index)
  // })

  let filteredPosts = posts
  if (filter !== '') {
    filteredPosts = posts.filter(post =>
      (post.node.data.Category.toUpperCase() + ' ALL').includes(filter)
    )
  }

  const searchOptions = {
    isCaseSensitive: false,
    distance: 100,
    shouldSort: true,
    keys: ['node.data.Blog_Text', 'node.data.title'],
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
            <button onClick={onClickFilter} aria-pressed={filter === 'ALL'}>
              ALL
            </button>
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

// export const pageQuery = graphql`
//   query IndexQuery {
//     allAirtable(
//       filter: { data: { publishing_status: { eq: "Publish" } } }
//       sort: { order: DESC, fields: data___Date }
//     ) {
//       edges {
//         node {
//           id
//           data {
//             Blog_Text
//             Images {
//               url
//             }
//             author
//             Category
//             Date
//             title
//             slug
//           }
//         }
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 500)
//           id
//           frontmatter {
//             title
//             date(formatString: "dddd, MMMM DD, YYYY")
//             path
//             category
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default Blog
