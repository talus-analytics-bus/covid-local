import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from '../components/Layout/Layout'

import styles from '../styles/blog-post.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { airtable: post } = data // data.markdownRemark holds your post data

  const blogPostImage = filename => {
    const url = post.data.Additional_Images.find(
      img => img.filename === filename
    ).url

    return ReactDOMServer.renderToString(
      <img
        src={url}
        alt={`Blog post image ${filename}`}
        style={{ width: '100%' }}
      />
    )
  }

  let blogTextWithImages = ''

  if (post.data.Additional_Images && post.data.Additional_Images.length > 0) {
    const textSections = post.data.Blog_Text.split(/\[IMAGE: ".*"\]/g)
    const imageFileNames = [
      ...post.data.Blog_Text.matchAll(/\[IMAGE: "(.*)"\]/g),
    ]

    textSections.forEach((text, index) => {
      if (post.data.Additional_Images[index]) {
        blogTextWithImages =
          blogTextWithImages + text + blogPostImage(imageFileNames[index][1])
      }
    })
  } else {
    blogTextWithImages = post.data.Blog_Text
  }

  return (
    <Layout>
      <article className={styles.main}>
        <Helmet
          title={`Notes From The Field - ${post.data.title}`}
          meta={[
            {
              name: 'description',
              content: `COVID Local blog: keeping local leaders up to date during the COVID-19 pandemic.`,
            },
          ]}
        />
        <Link to="/blog/">&lt; back to all posts</Link>
        <header>
          <h1>{post.data.title}</h1>
          <h2>{post.data.Date}</h2>
        </header>
        <div className={styles.imageContainer}>
          <img src={post.data.Images[0].url} alt={post.data.title} />
        </div>

        <h3>{post.data.author}</h3>
        <section
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(blogTextWithImages),
          }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    airtable(data: { slug: { eq: $path } }) {
      id
      data {
        Blog_Text
        Date
        Images {
          url
        }
        Additional_Images {
          filename
          url
        }
        slug
        title
        author
      }
    }
  }
`

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//         author
//       }
//     }
//   }
// `
//
